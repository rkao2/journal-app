
// Footer.js
import React from 'react';
import {Box, Typography, Link} from '@mui/material';
//import '../styles/components/Footer.css';


function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5', // Light grey background
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ddd', // Optional border
      }}
    >
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
        &copy; 2024 AuraNotes
      </Typography>
      <Box>
        <Link href="#privacy" color="primary" underline="hover" sx={{ margin: '0 10px' }}>
          Privacy Policy
        </Link>
        <Link href="#terms" color="primary" underline="hover" sx={{ margin: '0 10px' }}>
          Terms of Service
        </Link>
        <Link href="#contact" color="primary" underline="hover" sx={{ margin: '0 10px' }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;