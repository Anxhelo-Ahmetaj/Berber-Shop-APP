const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointmentsByBarberAndDate
} = require('../controllers/appointmentsController');

// ✅ Krijon një rezervim të ri
router.post('/', createAppointment);

// ✅ Merr rezervimet për një berber dhe datë
router.get('/', getAppointmentsByBarberAndDate);

module.exports = router;
