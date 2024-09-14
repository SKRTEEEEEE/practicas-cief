import React, { useState } from 'react';
//import dataBicis from '../../../bicis.json';
import data from '../../../data.json';
import imagenes from '../../../backgroundIMG.json'
//import './Slideshow.css';  // Certifique-se de ter o arquivo CSS

const images = imagenes;

const motos = data.filter(item => item.tipo === 'moto');
const bicicletas = data.filter(item => item.tipo === 'bicicleta');
//const bicis = dataBicis;

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState('moto');

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

  const handleShowMotos = () => {
    setShow('motos');
  }

  const handleShowBicicletas = () => {
    setShow('bicicletas')
  }

  const itemsToShow = show === 'motos' ? motos : bicicletas;

  return (
    <>
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
    <div className="disp-container">
    <h2>Disponibilidade</h2>
    <button onClick={handleShowMotos}>Motos</button>
    <button onClick={handleShowBicicletas}>Bicis</button>
    
    <div className="container">
      {itemsToShow.map((item, index) => (
        <div className="card" key={index}>
            <img className='img-disp' src={item.foto} alt={item.nome} />
            <h3 className='h3-disp'>{item.nome}</h3>
            <p className='km-disp'>Quilometragem: {item.kilometragem} km</p>
            <p className='price-disp'>Preço: R$ {item.preco}</p>
            <button className='btn-disp'>Reserve</button>
        </div>
      ))}
    </div>
</div>
</>
  );
}

export default HomePage;
