import React, { useState } from 'react';
import axios from 'axios';

const Photoupload = ({ onPhotoUpload }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null); // Add this state for preview

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const uploadPhoto = async () => {
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('photo', file);

            const response = await axios.post('http://localhost:5000/api/photos', formData); // Replace with your backend URL
            console.log('Photo uploaded successfully:', response.data);

            // Notify parent component about the new photo
            if (onPhotoUpload) {
                onPhotoUpload(response.data);
            }

            // Reset form after successful upload
            setFile(null);
            setPreview(null);
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Upload Photo</h2>
            <input
                type="file"
                onChange={handleFileChange}
                className="mb-2 p-2 border rounded-md w-full"
            />
            <button
                onClick={uploadPhoto}
                className="bg-indigo-600 text-white mx-4 py-2 px-4 rounded-md hover:bg-indigo-700"
            >
                Upload
            </button>
        </div>
    );
};

export default Photoupload;
