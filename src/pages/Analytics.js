import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

function Analytics() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, padding: "60px",}}>
      <Typography variant="h4" component="h2" gutterBottom>
        Analytics & Insights
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          marginTop: 3
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
              Mood Trends
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visualize how your mood has changed over time.
            </Typography>
            {/* Placeholder for future integration of mood charts */}
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
              Sentiment Analysis
            </Typography>
            <Typography variant="body1" color="text.secondary">
              See the emotional trends in your entries over time.
            </Typography>
            {/* Placeholder for future integration of sentiment analysis */}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Analytics;
