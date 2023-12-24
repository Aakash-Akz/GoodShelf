const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Get all products
router.get('/', async (req, res) => {
  try {
    const db = mongoose.connection.db; // Get the MongoDB connection object
    const products = await db.collection('Products').find().toArray();
    res.json(products);
    console.log(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
