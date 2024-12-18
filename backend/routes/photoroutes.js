const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Get all photos
router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching photos' });
  }
});

// Upload a photo
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const photo = new Photo({
      name: req.file.originalname,
      url: `http://localhost:${process.env.PORT || 5000}/${req.file.path}`,
    });
    const savedPhoto = await photo.save();
    res.status(201).json(savedPhoto);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading photo' });
  }
});

// Delete a photo
router.delete('/:id', async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    await photo.remove();
    res.json({ message: 'Photo deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting photo' });
  }
});

module.exports = router;
