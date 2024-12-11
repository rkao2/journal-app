
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
//import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';

//import pages
import Home from './pages/Home';
import Entries from './pages/Entries';
import Analytics from './pages/Analytics/Analytics';
import Goals from './pages/Goals';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      <div className="app-body">
        {/* Header */}
        <Header />

        {/* Sidebar and Main Content */}
        <div className="app-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/goals" element={<Goals />} />
              {/* Extra footer in settings? */}
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;



