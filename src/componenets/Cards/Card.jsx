
import React from 'react'
import "./Card.css"

const Card = ({ title, image, link,className }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className={`card ${className || ""}`} onClick={handleClick} style={{ cursor: "pointer" }}>
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;

