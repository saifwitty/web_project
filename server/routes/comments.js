const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get all comments for a blog
router.get('/:id', async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.id }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments', error: err.message });
  }
});

// Post a new comment for a blog
router.post('/:id', async (req, res) => {
  try {
    const { username, comment } = req.body;
    const newComment = new Comment({
      blogId: req.params.id,
      username,
      comment
    });
    await newComment.save();
    res.json(newComment);
  } catch (err) {
    res.status(500).json({ message: 'Error saving comment', error: err.message });
  }
});

module.exports = router;