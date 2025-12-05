const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const tourRoutes = require('./routes/tours'); // 👈 your tour routes here

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// API Routes
app.use('/api/tours', tourRoutes); // 👈 mount your tour routes

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
})
.catch(err => console.error(err));
