import React, { useState } from 'react';

const ImageWithText = ({ src, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '300px', // Adjust the width as needed
        margin: '10px', // Add some margin for spacing
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      {isHovered && (
        <div
          style={{
            // position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the background color and opacity as needed
            color: 'white',
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Adjust the column size as needed
        gap: '20px', // Adjust the gap between images
      }}
    >
      {images.map((image, index) => (
        <ImageWithText key={index} {...image} />
      ))}
    </div>
  );
};

export default ImageGrid;
