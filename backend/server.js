const express = require('express');
const cors = require('cors');
const photoRoutes = require('./routes/photoroutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://cloud-photo-storage.vercel.app',
      'https://cloudphoto-storage.pages.dev',
      'http://localhost:3000',
      'http://localhost:5000',
      'http://100.114.44.75:3000'
    ];

    // Allow requests with null origin (e.g., for local development or testing)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin not allowed - ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// Connect to the MongoDB database
mongoose
  .connect(process.env.REACT_APP_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Route for the base URL
app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

// Serve static files for uploads
app.use('/uploads', express.static('uploads'));

// API routes for photos
app.use('/api/photos', photoRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
