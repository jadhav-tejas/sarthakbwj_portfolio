import React from "react";
import { useParams } from "react-router-dom";
import imageData from "../Utils/permacultureData";
import "../Styles/blog.styles.css"; // Import the updated CSS file

const BlogDetail = () => {
  const { id } = useParams();
  const blog = imageData.find((item) => item.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-card">
      <h1 className="blog-title">{blog.blogTitle}</h1>
      <h2 className="blog-subtitle">{blog.blogSubtitle}</h2> {/* Add subtitle if available */}
      <div className="blog-image-container">
        <img
          src={require(`../Utils/permaculture_images/${blog.blogSrc}`)}
          alt={blog.blogTitle}
          className="blog-image"
        />
      </div>
      <p className="blog-text">{blog.blogText}</p>
    </div>
  );
};

export default BlogDetail;
