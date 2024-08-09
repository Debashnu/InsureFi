const DiamanteSDK = require('diamante-sdk-js'); // This could be an object or factory function


const diamante = DiamanteSDK({
  network: 'https://diamtestnet.diamcircle.io',  // Test network URL
  key: 'your-diamante-api-key'           // Your Diamante API key
});

exports.makePayment = async (from, to, amount) => {
  try {
    const transaction = await diamante.payment.create({
      source: from,
      destination: to,
      amount
    });
    return transaction;
  } catch (error) {
    throw new Error(`Payment failed: ${error.message}`);
  }
};
