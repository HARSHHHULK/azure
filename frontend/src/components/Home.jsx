// Home.js

import React from 'react';
import '../styles/Home.css'; // You can create this CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="card">
        <h1>Welcome to Azure App</h1>
        <p>Please select how you want to log in:</p>
        <div className="button-container">
          <a href="/login" className="login-button">Normal User</a>
          <a href="/enterprise-login" className="login-button">Enterprise Architect</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
