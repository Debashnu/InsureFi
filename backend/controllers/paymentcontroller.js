const diamanteService = require('../services/diamanteService');

exports.makePayment = async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    const result = await diamanteService.makePayment(from, to, amount);
    res.json({ success: true, transactionId: result.transactionId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
