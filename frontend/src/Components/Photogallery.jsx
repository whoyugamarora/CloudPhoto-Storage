import React, { useState } from 'react';

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePreview = () => {
    setSelectedPhoto(null);
  };

  // Ensure `photos` is always an array
  const validPhotos = Array.isArray(photos) ? photos : [];

  return (
    <div>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {validPhotos.length > 0 ? (
          validPhotos.map((photo, index) => (
            <div
              key={index}
              className="rounded-md shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(photo)}
            >
              <img
                src={photo.url} // Adjust based on your API's photo object structure
                alt={photo.name || 'Photo'}
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center">{photo.name || 'Untitled'}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No photos available</p>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-md shadow-lg">
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.name || 'Preview'}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="mt-2 text-center text-gray-700">
              {selectedPhoto.name || 'Untitled'}
            </p>
            {/* Download Button */}
            <a
              href={selectedPhoto.url}
              download={selectedPhoto.name || 'photo'}
              className="block mt-4 bg-indigo-600 text-white py-2 px-4 text-center rounded-md hover:bg-indigo-700"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
