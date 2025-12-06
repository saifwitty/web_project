const express = require('express');
const router = express.Router();

const tours = [
  {
    _id: "1",
    title: "Saint Martin Island Tour",
    city: "Saint Martin",
    photo: "http://localhost:5000/images/saint.jpg",
    price: 800,
    distance: 400,
    maxGroupSize: 10,
    reviews: [{ rating: 5 }, { rating: 4 }, { rating: 4 }]
  },
  {
    _id: "2",
    title: "Lalbagh Fort Historical Walk",
    city: "Dhaka",
    photo: "http://localhost:5000/images/lal.jpg",
    price: 500,
    distance: 20,
    maxGroupSize: 25,
    reviews: [{ rating: 4 }, { rating: 4 }, { rating: 3 }]
  },
  {
    _id: "3",
    title: "Sreemangal Tea Garden Experience",
    city: "Sreemangal",
    photo: "http://localhost:5000/images/sreemangal.jpg",
    price: 1000,
    distance: 200,
    maxGroupSize: 15,
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }]
  },
  {
    _id: "4",
    title: "Sundarbans Wildlife Adventure",
    city: "Sundarbans",
    photo: "http://localhost:5000/images/sundarban.jpg",
    price: 1500,
    distance: 500,
    maxGroupSize: 12,
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }, { rating: 5 }]
  },
  {
    _id: "5",
    title: "Cox's Bazar Beach Escape",
    city: "Cox's Bazar",
    photo: "http://localhost:5000/images/Cox.jpg",
    price: 1200,
    distance: 350,
    maxGroupSize: 20,
    reviews: [{ rating: 4 }, { rating: 5 }, { rating: 4 }]
  },
  {
    _id: "6",
    title: "Rangamati Hill & Lake Tour",
    city: "Rangamati",
    photo: "http://localhost:5000/images/Rangamati.jpg",
    price: 1100,
    distance: 250,
    maxGroupSize: 8,
    reviews: [{ rating: 5 }, { rating: 4 }]
  },
  {
    _id: "7",
    title: "Bandarban Mountain Adventure",
    city: "Bandarban",
    photo: "http://localhost:5000/images/hills.jpg",
    price: 1400,
    distance: 320,
    maxGroupSize: 10,
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }]
  },
  {
    _id: "8",
    title: "Kuakata Sea View Sunrise & Sunset",
    city: "Kuakata",
    photo: "http://localhost:5000/images/kuakata.jpg",
    price: 900,
    distance: 420,
    maxGroupSize: 18,
    reviews: [{ rating: 4 }, { rating: 4 }, { rating: 3 }]
  },
  {
    _id: "9",
    title: "Mahasthangarh Ancient Site Tour",
    city: "Bogra",
    photo: "http://localhost:5000/images/Pundranagar.jpg",
    price: 600,
    distance: 60,
    maxGroupSize: 30,
    reviews: [{ rating: 4 }, { rating: 4 }]
  },
  {
    _id: "10",
    title: "Paharpur Buddhist Monastery Tour",
    city: "Naogaon",
    photo: "http://localhost:5000/images/Paharpur.jpg",
    price: 650,
    distance: 80,
    maxGroupSize: 22,
    reviews: [{ rating: 5 }, { rating: 4 }]
  },
  {
    _id: "11",
    title: "Ahsan Manzil Royal Palace Visit",
    city: "Dhaka",
    photo: "http://localhost:5000/images/Ahsan.jpg",
    price: 400,
    distance: 10,
    maxGroupSize: 40,
    reviews: [{ rating: 4 }, { rating: 4 }, { rating: 5 }]
  },
  {
    _id: "12",
    title: "Jaflong Natural River & Stone Valley",
    city: "Sylhet",
    photo: "http://localhost:5000/images/jaflong.jpeg",
    price: 950,
    distance: 200,
    maxGroupSize: 16,
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }]
  }
];

// Existing route for all tours
router.get('/', (req, res) => {
  res.json(tours);
});

// Search tours by city, distance, and maxGroupSize
router.get('/search', (req, res) => {
  const { city, distance, maxGroupSize } = req.query;
  let results = tours;

  if (city) {
    results = results.filter(tour => tour.city.toLowerCase() === city.toLowerCase());
  }
  if (distance) {
    results = results.filter(tour => tour.distance && tour.distance <= Number(distance));
  }
  if (maxGroupSize) {
    results = results.filter(tour => tour.maxGroupSize && tour.maxGroupSize >= Number(maxGroupSize));
  }

  res.json(results);
});

// Route for single tour by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tour = tours.find(t => t._id === id);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
});

module.exports = router;