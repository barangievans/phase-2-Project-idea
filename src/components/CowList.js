import React from 'react';
import './CowList.css'; // Import the CSS file for styling

const CowList = ({ cows }) => {
  if (cows.length === 0) {
    return <p>No cows available.</p>;
  }

  return (
    <div className="cow-list-container">
      <table className="cow-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Age (Years)</th>
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
    </div>
  );
};

export default CowList;
