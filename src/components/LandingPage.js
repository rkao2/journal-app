import React from 'react';
import FeatureCard from './FeatureCard';
import '../styles/components/LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>AuroNotes</h1>
        <button>Sign In</button>
        <button>Sign Up</button>
      </header>
      <main>
        <p>Track your thoughts and mood to improve mental health.</p>
        <div className="feature-highlights">
          <FeatureCard title="Mood Tracking" description="Track your mood daily." />
          <FeatureCard title="Sentiment Analysis" description="Get insights on emotional trends." />
          <FeatureCard title="Personalized Prompts" description="Daily reflection prompts." />
        </div>
      </main>
      
    </div>
  );
}

export default LandingPage;
