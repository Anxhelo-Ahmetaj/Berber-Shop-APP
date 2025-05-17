const express = require('express');
const router = express.Router();
const { getBarbers, addBarber } = require('../controllers/barbersController');

// Merr listën e berberëve
router.get('/', getBarbers);

// Shto berber të ri (përdor për adminin)
router.post('/', addBarber);

module.exports = router;
