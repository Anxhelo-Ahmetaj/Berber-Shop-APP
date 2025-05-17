const pool = require('../db');

// ✅ Funksioni për krijimin e një rezervimi të ri
const createAppointment = async (req, res) => {
  const { user_id, barber_id, date, time } = req.body;

  try {
    // Kontrollo nëse orari është i zënë
    const check = await pool.query(
      `SELECT * FROM appointments 
       WHERE barber_id = $1 AND date = $2 AND time = $3`,
      [barber_id, date, time]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({ error: 'Ky orar është i zënë për këtë berber.' });
    }

    // Krijo rezervimin
    const result = await pool.query(
      `INSERT INTO appointments (user_id, barber_id, date, time)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_id, barber_id, date, time]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Funksioni për të marrë rezervimet sipas berberit dhe datës
const getAppointmentsByBarberAndDate = async (req, res) => {
  const { barberId, date } = req.query;

  try {
    const result = await pool.query(
      `SELECT * FROM appointments WHERE barber_id = $1 AND date = $2`,
      [barberId, date]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eksporto funksionet
module.exports = {
  createAppointment,
  getAppointmentsByBarberAndDate
};
