import React from 'react';

const Landing = ({ onGetStarted }) => {
  return (
    <div>
      <h1>Welcome to Microinsurance App</h1>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default Landing;
