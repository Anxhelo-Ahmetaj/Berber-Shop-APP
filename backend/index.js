const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 💡 Importo rruget
const barberRoutes = require('./routes/barbers');
const appointmentRoutes = require('./routes/appointments');

// 💡 Përdor rruget
app.use('/api/barbers', barberRoutes);
app.use('/api/appointments', appointmentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Serveri po funksionon!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveri startoi në portin ${PORT}`));
