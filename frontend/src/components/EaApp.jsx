// EaApp.js

import React, { useState } from 'react';
import '../styles/EaApp.css'; // You can create this CSS file for styling

const EaApp = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInput3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="new-form-container">
      <form onSubmit={handleSubmit} className="new-form">
        <h1>New Form</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Input 1"
            value={input1}
            onChange={handleInputChange1}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Input 2"
            value={input2}
            onChange={handleInputChange2}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Input 3"
            value={input3}
            onChange={handleInputChange3}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EaApp;
