import React, { useState } from 'react';

const AddCowForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && breed && age) {
      onAdd({ name, breed, age: parseInt(age, 10) });
      setName('');
      setBreed('');
      setAge('');
    }
  };

  return (
    <div className="add-cow-form">
      <h2>Add Cow</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">Add Cow</button>
      </form>
    </div>
  );
};

export default AddCowForm;




