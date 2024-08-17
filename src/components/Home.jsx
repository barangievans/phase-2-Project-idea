import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Our Dairy Farm</h1>
      <p className={styles.description}>Use the navigation links to explore the app.</p>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/cow-inventory">Cow Inventory</Link></li>
          <li><Link to="/add-cow">Add Cow</Link></li>
          <li><Link to="/financial-analysis">Financial Analysis</Link></li>
          <li><Link to="/health-records">Health Records</Link></li>
          <li><Link to="/test">Test Page</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;


