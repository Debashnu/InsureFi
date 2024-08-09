module.exports = {
    networks: {
      diamante: {
        host: "localhost",     // Localhost (default: none)
        port: 8545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
    },
    compilers: {
      solc: {
        version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      }
    }
  };
  