import React from 'react';

// Inline style object
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  image: {
    width: '150px',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
  },
};

const CowEmblem = () => {
  return (
    <div style={styles.container}>
      <img
        src="/Cow Emblem.jpg"
        alt="Cow Emblem"
        style={styles.image}
      />
      <h2 style={styles.heading}>Cow Emblem</h2>
      <p style={styles.description}>Our beloved emblem represents the quality and tradition of our dairy farm.</p>
    </div>
  );
};

export default CowEmblem;
