require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Lidhu me MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch(err => console.error('MongoDB connection error ❌', err));

app.use(express.json());

// Importo routers
const appointmentRoutes = require('./routes/appointments');
const barberRoutes = require('./routes/barbers');  // <== Këtu është ndryshimi

// Përdori
app.use('/api/barbers', barberRoutes);
app.use('/api/appointments', appointmentRoutes);

// Rruga bazë për testim
app.get('/', (req, res) => {
  res.send('Backendi i berber-shop po punon! 💈');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
