import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>Generate more leads with a professional landing page!</h1>
          <div className="input-container">
            <input type="email" placeholder="Email Address" className="email-input" />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
