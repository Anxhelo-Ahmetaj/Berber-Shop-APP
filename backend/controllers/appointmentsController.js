const Appointment = require('../models/Appointment');

// ✅ Krijo rezervim të ri
const createAppointment = async (req, res) => {
  const { user_id, barber_id, date, time } = req.body;

  try {
    // Kontrollo nëse ekziston një rezervim në të njëjtën kohë
    const existing = await Appointment.findOne({ barber_id, date, time });

    if (existing) {
      return res.status(400).json({ error: 'Ky orar është i zënë për këtë berber.' });
    }

    const newAppointment = new Appointment({ user_id, barber_id, date, time });
    const saved = await newAppointment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Merr rezervimet sipas berberit dhe datës
const getAppointmentsByBarberAndDate = async (req, res) => {
  const { barberId, date } = req.query;

  try {
    const appointments = await Appointment.find({ barber_id: barberId, date });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAppointment,
  getAppointmentsByBarberAndDate
};
