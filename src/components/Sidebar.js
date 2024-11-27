import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, Typography } from '@mui/material';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          backgroundColor: '#ffffff',
          color: '#1976D2',
          top: 12,
          left: 130,
          zIndex: 1300, // Ensures the button is on top of the sidebar
        }}
      >
        {isOpen ? 'Close' : 'Open'}
      </Button>

      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        sx={{ width: 250, //padding: 2,
          position: "fixed",
          "& .MuiDrawer-paper": {width: 250, top: 64,},
         }}
        classes={{
          paper: {
            width: 250,
            //padding: 2,
          },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ paddingLeft: 1 }}>
          Quick Navigation
        </Typography>
        <List>
          <ListItem button>
            <Typography variant="body1" sx={{ marginTop: -1 }}> Daily View</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1">Weekly View</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1">Monthly View</Typography>
          </ListItem>
        </List>
        <Typography variant="h6" gutterBottom sx={{ paddingLeft: 1 }}>
          Tags and Categories
        </Typography>
        <List>
          <ListItem button>
            <Typography variant="body1" sx={{ marginTop: -1 }}>Mood: Happy</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1">Mood: Anxious</Typography>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
