import React from 'react';

//import '../styles/components/LandingPage.css';

import { Box, Typography } from '@mui/material';
import '../styles/components/FeatureCard.css'; // Include your custom CSS here


function FeatureCard({ title, description, backContent }) {
  return (
    <Box className="feature-card">
      <Box className="card-inner">
        {/* Front of the card */}
        <Box className="card-front">
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
        {/* Back of the card */}
        <Box className="card-back">
          <Typography variant="body2">{backContent}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureCard;
