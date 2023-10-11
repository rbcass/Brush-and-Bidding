import React, { useState, useEffect } from 'react';
import * as images from '../../images'; 



const Home = () => {


  const imageKeys = Object.keys(images);
  const [currentImage, setCurrentImage] = useState(0);

  // next button/image
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % imageKeys.length);
  };

  // previous
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + imageKeys.length) % imageKeys.length);
  };

  useEffect(() => {
    // autoadvance the gallery every 5 seconds
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      <div className="gallery">
        <button onClick={prevImage}>Previous</button>
        <img src={images[imageKeys[currentImage]]} alt={`Image ${currentImage + 1}`} />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Home;






