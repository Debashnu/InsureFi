import React, { useEffect } from 'react';
import Web3 from 'web3';

const MetaMaskConnect = ({ onConnect }) => {
  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        window.web3 = new Web3(window.ethereum);
        onConnect();
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log("Please install MetaMask!");
    }
  };

  useEffect(() => {
    handleConnect();
  }, []);

  return (
    <div>
      <h2>Connect to MetaMask</h2>
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default MetaMaskConnect;
