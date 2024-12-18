import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Photoupload from '../Components/Photoupload';
import Photogallery from '../Components/Photogallery';
import axios from 'axios';

const DashboardPage = ({user}) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/photos');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handlePhotoUpload = (newPhoto) => {
    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <Photoupload onPhotoUpload={handlePhotoUpload} />
        <Photogallery photos={photos} />
      </div>
    </div>
  );
};

export default DashboardPage;
