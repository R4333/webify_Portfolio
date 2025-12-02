let cachedBlogsPromise = null;

const blogContext = require.context(
  "../Assets/Blogs",
  false,
  /\.md$/
);

function parseFrontmatter(rawContent) {
  if (!rawContent.startsWith("---")) {
    return { data: {}, content: rawContent };
  }

  const endIndex = rawContent.indexOf("\n---", 3);
  if (endIndex === -1) {
    return { data: {}, content: rawContent };
  }

  const frontmatterRaw = rawContent.slice(3, endIndex).trim();
  const content = rawContent.slice(endIndex + 4).trimStart();

  const data = {};
  frontmatterRaw.split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key) data[key] = value;
  });

  return { data, content };
}

async function parseBlog(fileKey) {
  const slug = fileKey.replace("./", "").replace(".md", "");
  const filePath = blogContext(fileKey);
  const response = await fetch(filePath);
  const rawContent = await response.text();
  const { data, content } = parseFrontmatter(rawContent);

  return {
    slug,
    title: data.title || slug,
    author: data.author || "Tallha Waheed",
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    thumbnail: data.thumbnail || "",
    content,
  };
}

async function loadBlogsInternal() {
  const files = blogContext.keys();
  const posts = await Promise.all(files.map(parseBlog));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function loadBlogs() {
  if (!cachedBlogsPromise) {
    cachedBlogsPromise = loadBlogsInternal().catch((err) => {
      cachedBlogsPromise = null;
      throw err;
    });
  }
  return cachedBlogsPromise;
}
