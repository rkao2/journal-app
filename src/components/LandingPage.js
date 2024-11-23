import React, { useState } from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import FeatureCard from './FeatureCard';
import { styled } from '@mui/system';

const LandingPage = () => {
  const [modalType, setModalType] = useState(null); // Track modal state: "signIn" or "signUp"

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '40px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      {/* Header Section */}
      <header>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          AuraNotes
        </Typography>
        <Box sx={{ marginBottom: '30px' }}>
          <Button variant="contained" color="primary" onClick={() => openModal('signIn')} sx={{ marginRight: '10px' }}>
            Sign In
          </Button>
          <Button variant="outlined" color="primary" onClick={() => openModal('signUp')}>
            Sign Up
          </Button>
        </Box>
      </header>

      {/* Main Section */}
      <main sx={{ marginTop: '40px' }}>
        <Typography variant="body1" sx={{ marginBottom: '30px' }}>
          Track your thoughts and mood to improve mental health.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <FeatureCard
            title="Mood Tracking"
            description="Track your mood daily."
            backContent="Analyze your emotions over time with charts and insights."
          />
          <FeatureCard
            title="Sentiment Analysis"
            description="Get insights on emotional trends."
            backContent="AI-powered sentiment analysis to track emotional trends."
          />
          <FeatureCard
            title="Personalized Prompts"
            description="Daily reflection prompts."
            backContent="Stay inspired with AI-generated prompts tailored for you."
          />
        </Box>
      </main>

      {/* Modal Section */}
      <Modal open={!!modalType} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center' }}>
            {modalType === 'signIn' ? 'Sign In' : 'Sign Up'}
          </Typography>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: '10px' }}
            />
            {modalType === 'signUp' && (
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
              />
            )}
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </form>
          <Button
            variant="text"
            onClick={closeModal}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#888',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default LandingPage;
