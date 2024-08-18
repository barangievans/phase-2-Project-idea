import React, { useState } from 'react';
import styles from './CowInventory.css'; // Ensure this path is correct

const CowInventory = () => {
  // Initial cow data (could be fetched from a server)
  const initialCows = [
    // Example cows
    // { id: '1', image: 'url1', name: 'Bessie', breed: 'Holstein', age: '5' }
  ];

  // State management for cows and removed cows
  const [cows, setCows] = useState(initialCows);
  const [removedCows, setRemovedCows] = useState([]);
  const [newCow, setNewCow] = useState({
    id: '',
    image: '',
    name: '',
    breed: '',
    age: ''
  });

  // Function to handle adding a cow
  const handleAddCow = () => {
    if (newCow.id && newCow.name) { // Ensure ID and Name are provided
      setCows((prevCows) => [...prevCows, newCow]);
      setNewCow({
        id: '',
        image: '',
        name: '',
        breed: '',
        age: ''
      });
    } else {
      alert("ID and Name are required fields.");
    }
  };

  // Function to handle removing a cow
  const handleRemoveCow = (id) => {
    setCows((prevCows) => {
      const updatedCows = prevCows.filter(cow => cow.id !== id);
      const removedCow = prevCows.find(cow => cow.id === id);
      if (removedCow) {
        setRemovedCows((prevRemovedCows) => [...prevRemovedCows, removedCow]);
      }
      return updatedCows;
    });
  };

  return (
    <div className={styles.container}>
      <h2>Cow Inventory</h2>

      {/* Table with Add Cow Form */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Existing cows */}
          {cows.map(cow => (
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
              <td>
                <button 
                  onClick={() => handleRemoveCow(cow.id)} 
                  className={styles.buttonRemove}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {/* Row for adding a new cow */}
          <tr>
            <td>
              <input
                type="text"
                placeholder="ID"
                value={newCow.id}
                onChange={(e) => setNewCow({ ...newCow, id: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Image URL"
                value={newCow.image}
                onChange={(e) => setNewCow({ ...newCow, image: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Name"
                value={newCow.name}
                onChange={(e) => setNewCow({ ...newCow, name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Breed"
                value={newCow.breed}
                onChange={(e) => setNewCow({ ...newCow, breed: e.target.value })}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Age"
                value={newCow.age}
                onChange={(e) => setNewCow({ ...newCow, age: e.target.value })}
              />
            </td>
            <td>
              <button onClick={handleAddCow} className={styles.buttonAdd}>Add Cow</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Removed Cows Table */}
      <h3>Removed Cows</h3>
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
          {removedCows.map(cow => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CowInventory;
