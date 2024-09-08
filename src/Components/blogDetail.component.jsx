import React from "react";
import { useParams } from "react-router-dom";
import imageData from "../Utils/permacultureData";
import "../Styles/blog.styles.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = imageData.find((item) => item.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getImageSrc = (imageName) => {
    try {
      return require(`../Utils/permaculture_images/${blog.blogSrc}`);
    } catch (error) {
      return null; 
    }
  };

  return (
    <div className="blog-card">
      <h1 className="blog-title">{blog.blogTitle}</h1>
      <h2 className="blog-subtitle">{blog.blogSubtitle}</h2>
      <div className="blog-image-container">
        {blog.blogSrc ? (
          <img
            src={getImageSrc(blog.blogSrc)} 
            alt={blog.blogTitle}
            className="blog-image"
          />
        ) : (
          <div className="no-image-placeholder"></div>
        )}
      </div>
      <p className="blog-text">{blog.blogText}</p>
    </div>
  );
};

export default BlogDetail;
