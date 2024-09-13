import React, { useState } from 'react';
//import './Slideshow.css';  // Certifique-se de ter o arquivo CSS

const images = [
  { src: '../img/img1.avif', caption: 'Caption Text' },
  { src: '../img/img4.avif', caption: 'Caption Four' },
  { src: '../img/img2.avif', caption: 'Caption Two' },
  { src: '../img/img3.avif', caption: 'Caption Three' },
];

const motos = [
  {
    "nome": "Honda CB 500F",
    "kilometragem": 15000,
    "preco": 28000,
    "foto": "https://silesmotos.com/img/cms/Motos/HONDA/500-cbf-2024/01.png"
  },
  {
    "nome": "Yamaha MT-07",
    "kilometragem": 12000,
    "preco": 32000,
    "foto": "https://cdn.pixabay.com/photo/2021/10/11/12/03/motorcycle-6700442_960_720.png"
  },
  {
    "nome": "Kawasaki Z900",
    "kilometragem": 8000,
    "preco": 40000,
    "foto": "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Z900_BK1_STU__1_.png"
  },
  {
    "nome": "Suzuki GSX-S750",
    "kilometragem": 20000,
    "preco": 36000,
    "foto": "https://pueyrredonmotos.com/wp-content/uploads/2022/01/AZUL-A.png"
  },
  {
    "nome": "BMW F 850 GS",
    "kilometragem": 25000,
    "preco": 55000,
    "foto": "https://www.moto1pro.com/sites/default/files/bmw-f-850-gs-rallye-2020.jpg"
  },
  {
    "nome": "Suzuki GSX-S1000",
    "kilometragem": 20000,
    "preco": 36000,
    "foto": "https://e7.pngegg.com/pngimages/146/148/png-clipart-suzuki-gsx-series-motorcycle-car-suzuki-gsx-s1000-suzuki-car-motorcycle.png"
  },
  {
    "nome": "Yamaha MT-09",
    "kilometragem": 12000,
    "preco": 32000,
    "foto": "https://static.wixstatic.com/media/b4a6cf_56cffd23c2ea4f9891e9ec70e8e202f4~mv2.png/v1/fill/w_480,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b4a6cf_56cffd23c2ea4f9891e9ec70e8e202f4~mv2.png"
  },
  {
    "nome": "Yamaha MT-10",
    "kilometragem": 12000,
    "preco": 32000,
    "foto": "https://www.centralfloridapowersports.com/cdn/shop/files/2024_Yamaha_TRACER-9_GT_Plus_Sport_Touring_Motorcycle_Central_Florida_PowerSports_1.png?v=1703011537"
  }
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
    
    <div className="container">
      {motos.map((moto, index) => (
        <div className="card" key={index}>
            <img className='img-disp' src={moto.foto} alt={moto.nome} />
            <h3 className='h3-disp'>{moto.nome}</h3>
            <p className='km-disp'>Quilometragem: {moto.kilometragem} km</p>
            <p className='price-disp'>Preço: R$ {moto.preco}</p>
            <button className='btn-disp'>Reserve</button>
        </div>
      ))}
    </div>
</div>
</>
  );
}

export default Slideshow;
