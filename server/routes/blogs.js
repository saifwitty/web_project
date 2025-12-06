const express = require('express');
const router = express.Router();

const blogs = [
  {
    id: "1",
    title: "Discover Paradise: A Journey to Saint Martin's Island",
    content: "Imagine an island kissed by the turquoise waters of the Bay of Bengal, where coconut palms sway in the sea breeze and coral reefs sparkle beneath crystal-clear waves. Welcome to Saint Martin's Island — Bangladesh's tropical gem. Whether you’re savoring fresh seafood, snorkeling among vibrant marine life, or strolling along sunlit beaches under a starlit sky, every moment here feels like a dream. It’s the perfect escape for nature lovers, adventurers, and peace seekers alike. Don’t forget to sip on a green coconut while watching the golden sunset — pure magic!",
    image: "http://localhost:5000/images/saint.jpg"
  },
  {
    id: "2",
    title: "Sreemangal: The Land of Two Leaves and a Bud",
    content: "Tucked away in the lush hills of northeastern Bangladesh, Sreemangal is a tranquil haven known for its endless green tea gardens, refreshing rainforests, and rare wildlife. This peaceful town offers a sensory experience — the aroma of fresh tea leaves, the sound of Monipuri songs, and the taste of the world’s rarest 7-layer tea. Explore Lawachara National Park to spot the shy hoolock gibbons, or bike through misty tea estates at dawn. Whether you're a nature enthusiast or a tea lover, Sreemangal is a slice of serenity you’ll never forget.",
    image: "http://localhost:5000/images/sreemangal.jpg"
  }
];



// Get all blogs
router.get('/', (req, res) => {
  res.json(blogs);
});

// Get a single blog by ID
router.get('/:id', (req, res) => {
  const blog = blogs.find(b => b.id === req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

module.exports = router;