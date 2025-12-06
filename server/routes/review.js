/**
 * Review routes using MongoDB for persistent storage.
 * Requires a MongoDB connection in your main server file.
 */

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// --- Review Mongoose Model ---
const reviewSchema = new mongoose.Schema({
  tourId: { type: String, required: true },
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

// --- GET reviews for a tour ---
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.find({ tourId: id }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err.message });
  }
});

// --- POST a new review for a tour ---
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, rating, reviewText } = req.body;
    const newReview = new Review({
      tourId: id,
      username,
      rating,
      reviewText
    });
    await newReview.save();
    res.json(newReview);
  } catch (err) {
    res.status(500).json({ message: 'Error saving review', error: err.message });
  }
});

module.exports = router;