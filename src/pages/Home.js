import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';

function Home() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Page Title */}
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to Your Journal Dashboard!
      </Typography>
      
      {/* Page Description */}
      <Typography variant="body1" gutterBottom>
        Track your thoughts, analyze moods, and set goals to improve your mental health journey.
      </Typography>

      {/* Summary Section */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* Example Summary Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                Total Entries
              </Typography>
              <Typography variant="body2">
                42 entries logged so far. Keep up the great work!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                Mood Trend
              </Typography>
              <Typography variant="body2">
                Your mood has been improving over the past week. Stay positive!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                Goals Achieved
              </Typography>
              <Typography variant="body2">
                You've completed 3 of your 5 goals this month. Great progress!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
