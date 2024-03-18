// routes/partsRoutes.js
const express = require('express');
const router = express.Router();
const Part = require('../models/part');

// Get all parts
router.get('/', async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new part
router.post('/', async (req, res) => {
  const part = new Part({
    // Assume your request body will have name, description, price, etc.
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    inStock: req.body.inStock
  });

  try {
    const newPart = await part.save();
    res.status(201).json(newPart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add additional routes for getting a single part, updating, and deleting

module.exports = router;
