// FeatureCard.js
import React from 'react';

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
