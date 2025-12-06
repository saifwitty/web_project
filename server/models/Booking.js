const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  userEmail: { type: String, required: true },
  tourName: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  bookAt: { type: Date, required: true },
  groupSize: { type: Number, required: true },
  price: { type: Number, required: true }, // <-- Add this line
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);