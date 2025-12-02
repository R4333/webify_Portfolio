import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
import { loadBlogs } from "../../utils/blogLoader";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchBlogs() {
      try {
        const posts = await loadBlogs();
        if (!isMounted) return;

        setBlogs(
          posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            author: post.author,
            date: post.date,
            description: post.description,
            thumbnail: post.thumbnail,
          }))
        );
        setError(null);
      } catch (err) {
        console.error("Error loading blogs", err);
        if (isMounted) {
          setError("Unable to load blogs right now.");
        }
      }
    }

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Row className="blog-header" style={{ marginTop: "50px" }}>
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              My <span className="purple">Blogs</span>
            </h1>
            <p className="project-description" style={{ marginBottom: "40px" }}>
              Thoughts, tutorials, and insights on web development and technology
            </p>
          </Col>
        </Row>

        {blogs.length === 0 ? (
          <Row className="justify-content-center">
            <Col md={12} className="text-center">
              {error ? (
                <p className="project-description text-danger">{error}</p>
              ) : (
                <p className="project-description">
                  No blog posts yet. Check back soon!
                </p>
              )}
            </Col>
          </Row>
        ) : (
          <Row>
            {blogs.map((blog) => (
              <Col md={6} lg={4} className="mb-4" key={blog.slug}>
                <BlogCard {...blog} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Blog;
