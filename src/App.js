// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import FinancialAnalysis from './components/FinancialAnalysis';
import CowInventory from './components/CowInventory';
import HealthRecords from './components/HealthRecords';
import Home from './components/Home';
import About from './components/About'; // Import the About component
import './App.css';

const App = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    const fetchCows = () => {
      const cowData = []; // Use actual data here
      setCows(cowData);
    };

    fetchCows();
  }, []);

  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cow-inventory">Cow Inventory</Link></li>
          <li><Link to="/health-records">Health Records</Link></li>
          <li><Link to="/financial-analysis">Financial Analysis</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Route for About page */}
          <Route path="/cow-inventory" element={<CowInventory cows={cows} />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/financial-analysis" element={<FinancialAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
