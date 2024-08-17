import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddCowForm from './components/AddCowForm';
import FinancialAnalysis from './components/FinancialAnalysis';
import CowInventory from './components/CowInventory';
import CowEmblem from './components/CowEmblem';
import Home from './components/Home';
import HealthRecords from './components/HealthRecords';
import './App.css';

const App = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    // Simulate fetching cow data
    const fetchCows = () => {
      const cowData = []; // Use actual data here
      setCows(cowData);
    };

    fetchCows();
  }, []);

  const addCow = (cow) => {
    setCows((prevCows) => [...prevCows, cow]);
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <CowEmblem />
            </>
          } />
          <Route path="/cow-inventory" element={<CowInventory cows={cows} />} />
          <Route path="/add-cow" element={<AddCowForm onAdd={addCow} />} />
          <Route path="/financial-analysis" element={<FinancialAnalysis />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;











