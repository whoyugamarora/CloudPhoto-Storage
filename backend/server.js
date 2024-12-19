const express = require('express');
const cors = require('cors');
const photoRoutes = require('./routes/photoroutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: (origin, callback) => {
      const allowedOrigins = ['https://cloud-photo-storage.vercel.app','https://cloudphoto-storage.pages.dev', 'http://localhost:3000', 'http://localhost:5000', 'http://100.114.44.75:3000'];
      if (allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  }
};

app.use(cors(corsOptions));

// Connect to the MongoDB database
mongoose.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Log any errors that occur when connecting to the database
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function () {
  console.log('Connected to MongoDB!');
});


app.get('/', (req, res) => res.status(200).json("Welcome, you app is working well"));
app.use('/uploads', express.static('uploads'));

app.use('/api/photos', photoRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
