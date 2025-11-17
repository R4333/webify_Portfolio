import { marked } from "marked";
import DOMPurify from "dompurify";
import matter from "gray-matter";

export const parseMarkdownFile = (content) => {
  const { data, content: markdown } = matter(content);
  const html = marked(markdown);
  const sanitizedHtml = DOMPurify.sanitize(html);

  return {
    frontmatter: data,
    content: sanitizedHtml,
  };
};

export const parseMarkdownFiles = async () => {
  const blogContext = require.context(
    "../Assets/Blogs",
    true,
    /\.md$/,
    "lazy"
  );

  const blogs = await Promise.all(
    blogContext.keys().map(async (key) => {
      const fileName = key.replace("./", "").replace(".md", "");
      const module = await blogContext(key);
      const content = module.default;

      const { frontmatter } = parseMarkdownFile(content);

      return {
        slug: fileName,
        ...frontmatter,
      };
    })
  );

  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
};
