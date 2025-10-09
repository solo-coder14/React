import React from 'react';
import "./card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <div className="card" style={{ overflow: "hidden" }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;