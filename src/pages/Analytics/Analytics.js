import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import MoodTrend from './MoodTrend';

function Analytics() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, padding: "60px" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Analytics & Insights
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          marginTop: 3,
        }}
      >
        {/* Mood Trends Card */}
        <Card variant="outlined">
          <Link to="mood-trend" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Mood Trends
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Visualize how your mood has changed over time.
              </Typography>
            </CardContent>
          </Link>
        </Card>

        {/* Sentiment Analysis Card */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
              Sentiment Analysis
            </Typography>
            <Typography variant="body1" color="text.secondary">
              See the emotional trends in your entries over time.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Nested Routes for Analytics */}
      <Routes>
        <Route path="mood-trend" element={<MoodTrend />} />
      </Routes>
    </Container>
  );
}

export default Analytics;
