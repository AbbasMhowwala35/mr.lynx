import React from "react";
import { Image } from "react-bootstrap";
import star from '../Assets/images/ai-star.svg'
const suggestions = [
  "How do I connect with potential investors for my EV startup?",
  "How do I connect with potential investors for my EV startup?",
  "How do I connect with potential investors for my EV startup?",
  "How do I connect with potential investors for my EV startup?",
];

const Suggestions = () => {
  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion-card">
          <span className="icon-star"><Image src={star} alt="Star" /></span>
          <p>{suggestion}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
