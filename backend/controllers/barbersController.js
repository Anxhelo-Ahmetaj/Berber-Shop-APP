const Barber = require('../models/Barber');

const getBarbers = async (req, res) => {
  try {
    const barbers = await Barber.find();
    res.json(barbers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBarber = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Emri i berberit është i nevojshëm' });
  }

  try {
    const newBarber = new Barber({ name });
    const savedBarber = await newBarber.save();
    res.status(201).json(savedBarber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBarbers, addBarber };
