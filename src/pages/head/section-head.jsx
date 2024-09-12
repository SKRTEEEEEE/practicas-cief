import React, { useState } from 'react';
//import './Slideshow.css';  // Certifique-se de ter o arquivo CSS

const images = [
  { src: '../img/img1.avif', caption: 'Caption Text' },
  { src: '../img/img4.avif', caption: 'Caption Four' },
  { src: '../img/img2.avif', caption: 'Caption Two' },
  { src: '../img/img3.avif', caption: 'Caption Three' },
];

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > images.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = images.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
          style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
        >
          {/* <div className="numbertext">{index + 1} / {images.length}</div> */}
          <img className="img-head" src={image.src} alt={`Slide ${index + 1}`} />
          {/* <div className="text">{image.caption}</div> */}

          {/* Dots inside the image */}
          <div className="dots-container">
            {images.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`dot ${slideIndex === dotIndex + 1 ? 'active' : ''}`}
                onClick={() => currentSlide(dotIndex + 1)}
              ></span>
            ))}
          </div>
        </div>
      ))}

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
}

export default Slideshow;
