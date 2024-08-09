const express = require('express');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payments');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
