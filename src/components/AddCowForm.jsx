import React, { useState } from 'react';

const AddCowForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCow = {
      name,
      breed,
      age: parseInt(age, 10)
    };
    onAdd(newCow);
    setName('');
    setBreed('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Cow</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Breed:
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Cow</button>
    </form>
  );
};

export default AddCowForm;







