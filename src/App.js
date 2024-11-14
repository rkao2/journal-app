// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Import pages
import Home from './pages/Home';
import Entries from './pages/Entries';
import Analytics from './pages/Analytics';
import Goals from './pages/Goals';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


