// EAOptions.js

import React from 'react';
import '../styles/EaOptions.css'; // You can create this CSS file for styling

const EAOptions = () => {
  return (
    <div className="ea-options-container">
      <h2>Welcome, Enterprise Architect</h2>
      <div className="options">
        <div className="option">
          <h3>Create</h3>
          <p>Create TAD</p>
          <a href="/create-resources" className="option-a">Go</a>
        </div>
        <div className="option">
          <h3>View</h3>
          <p>View TAD</p>
          <a href="/view-resources" className="option-a">Go</a>
        </div>
        <div className="option">
          <h3>Request</h3>
          <p>Request to edit TAD</p>
          <a href="/request-edit-resources" className="option-a">Go</a>
        </div>
      </div>
    </div>
  );
};

export default EAOptions;
