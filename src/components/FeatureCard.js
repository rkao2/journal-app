import React from 'react';
import '../styles/components/LandingPage.css';

function FeatureCard({ title, description, backContent }) {
  return (
    <div className="feature-card">
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {/* Back of the card */}
        <div className="card-back">
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
