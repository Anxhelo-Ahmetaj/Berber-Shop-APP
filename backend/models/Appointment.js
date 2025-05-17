const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Po deshe më vonë mund të shtosh një model për User
    required: true
  },
  barber_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Barber',
    required: true
  },
  date: {
    type: String, // ose `Date`, nëse do format datash
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
