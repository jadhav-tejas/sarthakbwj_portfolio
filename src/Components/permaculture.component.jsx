import React from "react";
import imageData from "../Utils/permacultureData";
import { Card, Button } from 'react-bootstrap';
import "../Styles/permaculture.styles.css"; // Make sure to create this CSS file

const Permaculture = ({ permacultureData }) => {
    return (
      <>
        {imageData.map((image, index) => (
          <Card className="permaculture-card" key={index}>
            <Card.Img
              variant="left"
              src={require(`../Utils/permaculture_images/${image.blogSrc}`)}
              alt={image.blogTitle}
              className="permaculture-card-img"
            />
            <Card.Body>
              <Card.Title>{image.blogTitle}</Card.Title>
              <Card.Text>
                {image.blogText}
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  };
  
  export default Permaculture;