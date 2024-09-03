import React from 'react';
import imageData from '../Utils/imageData';
import '../Styles/yoga.styles.css'; // Make sure to create this CSS file

const Yoga = () => {
    return (
        <div className="yoga-container">
            {imageData.map((image, index) => (
                <div className="yoga-item" key={index}>
                    <img src={require(`../Utils/yoga_images/${image.src}`)} alt={image.title} />
                    <div className="yoga-text">
                        <h3>{image.title}</h3>
                        <p>{image.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Yoga;
