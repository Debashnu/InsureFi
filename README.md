# Microinsurance App

This project is a microinsurance application leveraging the Diamante network and MetaMask for seamless blockchain integration.

## Project Structure

### Backend

- **server.js**: Main server file.
- **package.json**: Node.js dependencies.
- **/routes**: Defines authentication and payment routes.
- **/controllers**: Contains authentication and payment logic.
- **/services**: Manages Diamante SDK logic.

### Contracts

- **InsurancePolicy.sol**: Smart contract for managing insurance policies.
- **Migrations.sol**: Truffle migrations contract.
- **truffle-config.js**: Truffle configuration file.

### Migrations

- **1_initial_migration.js**: Migration script for deploying contracts.

### Frontend

- **index.html**: Main HTML file.
- **app.js**: Main JavaScript file for connecting to MetaMask and managing user flow.
- **styles.css**: Basic CSS styles.
- **/components**: React components for Landing, MetaMaskConnect, Login, SignUp, and Dashboard.
- **package.json**: React dependencies.

## Running the Project

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Contracts

1. Compile and migrate smart contracts:
   ```bash
   cd microinsurance_app
   truffle compile
   truffle migrate --network diamante
