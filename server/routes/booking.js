const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/booking - create a new booking
router.post('/', async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).json({ message: "Booking successful!", booking });
  } catch (err) {
    res.status(500).json({ message: "Failed to save booking", error: err.message });
  }
});


// (Optional) GET /api/booking - list all bookings (for admin/testing)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings", error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting booking", error: err.message });
  }
});

module.exports = router;