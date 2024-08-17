import React from 'react';
import styles from './CowInventory.css'; // Ensure this path is correct

const CowInventory = ({ cows }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Cow Inventory</h2>
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
          {cows.map(cow => (
            <tr key={cow.id}>
              <td>{cow.id}</td>
              <td>
                <img src={cow.image} alt={cow.name} className={styles.image} />
              </td>
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

export default CowInventory;
