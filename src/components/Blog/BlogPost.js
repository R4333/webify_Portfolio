import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { blogPosts } from "../../data/blogs";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const foundPost = blogPosts.find((post) => post.slug === slug);

      if (!foundPost) {
        setError("Blog post not found");
        return;
      }

      const html = marked(foundPost.content);
      const sanitizedHtml = DOMPurify.sanitize(html);

      setPost({
        title: foundPost.title,
        author: foundPost.author,
        date: foundPost.date,
        thumbnail: foundPost.thumbnail,
        content: sanitizedHtml,
      });
      setError(null);
    } catch (err) {
      setError("Error loading blog post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <h2 className="text-danger">{error}</h2>
            <Link to="/blog">
              <Button variant="primary" className="mt-3">
                Back to Blogs
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container className="blog-post-container" style={{ marginTop: "80px" }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Link to="/blog" className="blog-back-link">
            ← Back to Blogs
          </Link>

          <article className="blog-post-content mt-4">
            <h1 className="blog-post-title">{post.title}</h1>

            <div className="blog-post-meta mb-4">
              <span className="blog-post-author">{post.author}</span>
              <span className="blog-post-date"> • {formattedDate}</span>
            </div>

            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="blog-post-thumbnail mb-4"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            )}

            <div
              className="blog-post-markdown"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-5 mb-4">
            <Link to="/blog">
              <Button variant="primary">Back to Blogs</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogPost;
