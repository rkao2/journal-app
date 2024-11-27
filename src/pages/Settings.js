import React from 'react';
import { Box, Typography, Button, Switch, FormControlLabel, Grid2, Paper } from '@mui/material';

function Settings() {
  return (
    <Box sx={{ p: 4, padding: "80px" }}>
      {/* Page Title */}
      <Typography variant="h4" component="h2" gutterBottom>
        Settings
      </Typography>

      <Grid2 container spacing={3}>
        {/* Account Settings Section */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <Button variant="contained" color="primary" sx={{ mr: 2, mb: 1 }}>
              Change Password
            </Button>
            <Button variant="outlined" color="secondary">
              Update Email
            </Button>
          </Paper>
        </Grid2>

        {/* Privacy Preferences Section */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Privacy Preferences
            </Typography>
            <FormControlLabel
              control={<Switch />}
              label="Make my entries private by default"
            />
          </Paper>
        </Grid2>

        {/* Notifications Settings Section */}
        <Grid2 item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <FormControlLabel
              control={<Switch />}
              label="Receive daily reminders"
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Settings;
