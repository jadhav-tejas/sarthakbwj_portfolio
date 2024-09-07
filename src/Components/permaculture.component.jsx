import React from "react";
import { useNavigate } from "react-router-dom";
import imageData from "../Utils/permacultureData";
import "../Styles/permaculture.styles.css";

const Permaculture = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container">
      {imageData.map((image, index) => (
        <div onClick={() => handleClick(image.id)} className="horizontal-card" key={index}>
          <img
            src={require(`../Utils/permaculture_images/${image.blogSrc}`)}
            alt={image.blogTitle}
            className="horizontal-card-img"
          />
          <div className="horizontal-card-body">
            <h2 className="horizontal-card-title">{image.blogTitle}</h2>
            <p className="horizontal-card-text">{image.blogText}</p>
            <button
              className="horizontal-card-button"
              onClick={() => handleClick(image.id)} // Pass the unique ID here
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Permaculture;
