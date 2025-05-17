const express = require('express');
const router = express.Router();
const {
  getBarbers,
  addBarber
} = require('../controllers/barbersController');

// ✅ Merr listën e berberëve
router.get('/', getBarbers);

// ✅ Shton një berber të ri (p.sh. për admin panel)
router.post('/', addBarber);

module.exports = router;
