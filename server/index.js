require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5000;
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

// Import and mount tours route
const tourRoutes = require('./routes/tours');
app.use('/api/tours', tourRoutes);

const reviewRoutes = require('./routes/review');
app.use('/api/review', reviewRoutes);

const bookingRoutes = require('./routes/booking');
app.use('/api/booking', bookingRoutes);
const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes);

const commentRoutes = require('./routes/comments');
app.use('/comment', commentRoutes);
// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Register endpoint
app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login endpoint
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    // Optionally, create a JWT token here if you want authentication
    // const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1d' });
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      // token, // Uncomment if you add JWT
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});