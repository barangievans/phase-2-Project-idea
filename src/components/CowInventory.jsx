import React, { useState, useEffect } from 'react';
import './CowInventory.css'; // Make sure this path is correct

const CowInventory = () => {
  const [cows, setCows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/cows');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCows(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Cow Inventory</h1>
      {cows.length === 0 ? (
        <p>No cows available.</p>
      ) : (
        <table className="cow-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {cows.map(cow => (
              <tr key={cow.id}>
                <td>{cow.id}</td>
                <td>{cow.name}</td>
                <td>{cow.breed}</td>
                <td>{cow.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CowInventory;
