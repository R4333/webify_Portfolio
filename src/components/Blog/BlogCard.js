import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function BlogCard({ slug, title, date, author, description, thumbnail }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="blog-card blog-card-view">
      {thumbnail && (
        <Card.Img
          variant="top"
          src={thumbnail}
          alt={title}
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body>
        <Card.Title className="blog-card-title">{title}</Card.Title>
        <div className="blog-card-meta">
          <small className="text-muted">
            {author} • {formattedDate}
          </small>
        </div>
        <Card.Text className="blog-card-description">{description}</Card.Text>
        <Link to={`/blog/${slug}`} className="blog-link">
          Read More →
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
