import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import MetaMaskConnect from './components/MetaMaskConnect';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleGetStarted = () => setCurrentPage('connect');
  const handleMetaMaskConnect = () => setCurrentPage(isAuthenticated ? 'login' : 'signup');
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };
  const handleSignUp = () => {
    setIsSignedUp(true);
    setCurrentPage('login');
  };

  return (
    <>
      {currentPage === 'landing' && <Landing onGetStarted={handleGetStarted} />}
      {currentPage === 'connect' && <MetaMaskConnect onConnect={handleMetaMaskConnect} />}
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'signup' && <SignUp onSignUp={handleSignUp} />}
      {currentPage === 'dashboard' && <Dashboard />}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
