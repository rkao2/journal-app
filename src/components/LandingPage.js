import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import '../styles/components/LandingPage.css';




function LandingPage() {
  const [modalType, setModalType] = useState(null); // Track modal state: "signIn" or "signUp"

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="landing-page">
      <header>
        <h1>AuraNotes</h1>
        <button onClick={() => openModal('signIn')}>Sign In</button>
        <button onClick={() => openModal('signUp')}>Sign Up</button>
      </header>
      <main>
        <p>Track your thoughts and mood to improve mental health.</p>
        <div className="feature-highlights">
          <FeatureCard title="Mood Tracking" 
          description="Track your mood daily." 
          backContent="Analyze your emotions over time with charts and insights." 
          />
          <FeatureCard title="Sentiment Analysis" 
          description="Get insights on emotional trends." 
          backContent="AI-powered sentiment analysis to track emotional trends"
          />
          <FeatureCard title="Personalized Prompts" 
          description="Daily reflection prompts." 
          backContent="Stay inspired with AI-generated prompts tailored for you."
          />
        </div>
      </main>

      {/* Modal Section */}
      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalType === 'signIn' ? 'Sign In' : 'Sign Up'}</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              {modalType === 'signUp' && <input type="email" placeholder="Email" required />}
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
