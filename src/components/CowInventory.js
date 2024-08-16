import React from 'react';

const CowInventory = ({ cows, onSelectCow }) => {
  return (
    <div className="cow-inventory">
      <h2>Cow Inventory</h2>
      {cows.length === 0 ? (
        <p>No cows available.</p>
      ) : (
        <ul>
          {cows.map(cow => (
            <li key={cow.id} onClick={() => onSelectCow(cow)}>
              {cow.name} ({cow.breed}, {cow.age} years old)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CowInventory;


