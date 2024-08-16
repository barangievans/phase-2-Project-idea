import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CowInventory from './components/CowInventory';
import CowEmblem from './components/CowEmblem';
import FinancialAnalysis from './components/FinancialAnalysis';
import AddCowForm from './components/AddCowForm';
import './App.css';

const App = () => {
  const [cows, setCows] = useState([]);

  // Replace the fetch call with static data for testing
  useEffect(() => {
    const fetchCows = async () => {
      try {
        // Use hardcoded data for testing
        const data = [
          { id: "1", name: "Apollo", breed: "Holstein-Friesian", age: 4 },
          { id: "2", name: "Ruby", breed: "Holstein-Friesian", age: 3 },
          // Add more test data as needed
        ];
        setCows(data);
      } catch (error) {
        console.error('Error fetching cows:', error);
      }
    };

    fetchCows();
  }, []);

  const addCow = async (cow) => {
    try {
      // For testing, add cow to state directly
      const newCow = { id: (cows.length + 1).toString(), ...cow };
      setCows(prevCows => [...prevCows, newCow]);
    } catch (error) {
      console.error('Error adding cow:', error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <CowEmblem />
      <div className="main-content">
        <div className="cow-inventory-container">
          <CowInventory cows={cows} onSelectCow={() => {}} />
        </div>
        <div className="form-container">
          <AddCowForm onAdd={addCow} />
        </div>
      </div>
      <FinancialAnalysis />
    </div>
  );
};

export default App;



