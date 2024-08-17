import React from 'react';
import PropTypes from 'prop-types'; // Optional, for type checking
import styles from './CowInventory.css'; // Ensure this path is correct

const CowInventory = ({ cows = [] }) => {
  return (
    <div className={styles.container}>
      <h2>Cow Inventory</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {cows.length > 0 ? (
            cows.map(cow => (
              <tr key={cow.id}>
                <td>{cow.id}</td>
                <td>
                  {cow.image ? (
                    <img src={cow.image} alt={cow.name} className={styles.image} />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>{cow.name}</td>
                <td>{cow.breed}</td>
                <td>{cow.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No cows available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Optional: Add prop types for better type checking
CowInventory.propTypes = {
  cows: PropTypes.array
};

export default CowInventory;
