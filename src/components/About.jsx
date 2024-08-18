// src/components/About.js
import React from 'react';
import './About.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>Welcome to <strong>Dairy Cow Management System</strong>, where our mission is to provide comprehensive and efficient solutions for managing dairy cattle. Our platform is designed to support dairy farmers in various aspects of their operations, ensuring that their herds are well-cared-for, productive, and healthy.</p>
      
      <h2>Our Services</h2>
      <p>At Dairy Cow Management System, we offer a range of tools and features to help you manage your dairy farm effectively:</p>
      <ul>
        <li><strong>Cow Inventory</strong>: Keep track of your herd with ease. Our Cow Inventory feature allows you to maintain detailed records of each cow, including breed, age, and health status. This centralized repository helps you monitor the well-being of each animal and manage your herd more efficiently.</li>
        <li><strong>Add Cow Form</strong>: Adding new cows to your inventory is simple and straightforward. With our intuitive form, you can quickly input essential details and update your herd records, ensuring that your data is always current.</li>
        <li><strong>Health Records</strong>: Effective health management is crucial for a thriving dairy farm. Our Health Records feature enables you to log and track various health practices, including:
          <ul>
            <li>Vaccinations</li>
            <li>Treatment</li>
            <li>Routine Check-Ups</li>
            <li>Parasite Control</li>
            <li>Regular Deworming</li>
            <li>Animal Husbandry/Serving of Cows</li>
            <li>Mature Heifers</li>
          </ul>
        </li>
        <li><strong>Financial Analysis</strong>: Understanding the financial aspect of dairy farming is vital for making informed decisions. Our Financial Analysis tool provides insights into your farm's expenses and revenues, helping you assess profitability and make strategic financial decisions.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>User-Friendly Interface</strong>: Our platform is designed with ease of use in mind, ensuring that both seasoned farmers and newcomers can navigate it effortlessly.</li>
        <li><strong>Comprehensive Features</strong>: We offer a complete suite of tools to cover every aspect of dairy cow management, from health records to financial analysis.</li>
        <li><strong>Customizable and Scalable</strong>: Whether you have a small farm or a large dairy operation, our system adapts to your needs, providing the flexibility to grow with your business.</li>
      </ul>
      
      <h2>Join Us</h2>
      <p>We invite you to explore Dairy Cow Management System and experience the difference that comprehensive, user-friendly tools can make in your dairy farming operations. For more information, support, or to get started, please visit our website or contact us directly.</p>
      <p>Thank you for choosing Dairy Cow Management System. We look forward to supporting you in achieving the highest standards of dairy farming.</p>
    </div>
  );
};

export default About;
