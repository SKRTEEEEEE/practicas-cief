import React, { useState } from "react";
import data from "../../../data.json";
import imagenes from "../../../backgroundIMG.json";

const images = imagenes;

const motos = data.filter((item) => item.tipo === "moto");

function HomePage() {
  const whatsappNumber = +34671222750;

  const [slideIndex, setSlideIndex] = useState(1);
  const [vehicleType, setVehicleType] = useState("motos");
  const [vehiculo, setVehiculo] = useState("Motocicletas");

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
    setVehicleType("motos");
    setVehiculo("Motocicletas");
  };

  const itemsToShow = vehicleType === "motos" ? motos : [];

  return (
    <>
      {/* Slideshow principal */}
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${slideIndex === index + 1 ? "active" : ""}`}
            style={{ display: slideIndex === index + 1 ? "block" : "none" }}
          >
            <img
              className="img-head"
              src={image.src}
              alt={`Slide ${index + 1}`}
            />
            <div className="dots-container">
              {images.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`dot ${slideIndex === dotIndex + 1 ? "active" : ""}`}
                  onClick={() => currentSlide(dotIndex + 1)}
                ></span>
              ))}
            </div>
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      {/* Exibição de veículos */}
      <div className="disp-container">
        <h2>{vehiculo} disponibles</h2>
        <div className="selector-vehiculos">
          <button className="button-motos" onClick={handleShowMotos}>
            Motos
          </button>
        </div>

        <div className="container">
          {itemsToShow.map((item, index) => {
            const photos = Object.values(item.foto); // Obter as fotos do JSON
            const [currentImageIndex, setCurrentImageIndex] = useState(0); // Controlar a imagem atual

            // Estado para os inputs de data
            const [fechaInicio, setFechaInicio] = useState("");
            const [fechaTermino, setFechaTermino] = useState("");

            const handleNextPhoto = () => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
              );
            };

            const handlePreviousPhoto = () => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? photos.length - 1 : prevIndex - 1
              );
            };

            // Funções para atualizar as datas
            const handleFechaInicioChange = (e) => {
              setFechaInicio(e.target.value);
            };

            const handleFechaTerminoChange = (e) => {
              setFechaTermino(e.target.value);
            };

            return (
              <div className="card" key={index}>
                {/* Carrossel de imagens do card */}
                <div className="image-container">
                  <img
                    className="img-disp"
                    src={photos[currentImageIndex]} // Exibe a foto atual
                    alt={item.nombre}
                  />
                  {photos.length > 1 && (
                    <div className="image-controls">
                      <button onClick={handlePreviousPhoto} className="btn-control">
                        &#10094;
                      </button>
                      <button onClick={handleNextPhoto} className="btn-control">
                        &#10095;
                      </button>
                    </div>
                  )}
                </div>
                <div className="info-card">
                  <h3 className="h3-disp">{item.nombre}</h3>
                  {/* <p className="km-disp">Descripción: {item.descripcion}</p> */}

                  {/* Inputs de data */}
                  <div className="fecha-container">
                    <label htmlFor={`fechaInicio-${index}`}>Fecha de inicio:</label>
                    <input
                      type="date"
                      id={`fechaInicio-${index}`}
                      value={fechaInicio}
                      onChange={handleFechaInicioChange} // Controla o valor
                    require />
                    <label htmlFor={`fechaTermino-${index}`}>Fecha de termino:</label>
                    <input
                      type="date"
                      id={`fechaTermino-${index}`}
                      value={fechaTermino}
                      onChange={handleFechaTerminoChange} // Controla o valor
                    require />
                  </div>

                  <p className="price-disp">Fianza: {item.fianza} €</p>
                  <p className="price-disp">Precio: {item.precio} €</p>
                </div>
                <div className="button-container">
                  <a
                    className="btn-disp"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hola, me gustaría saber más sobre el ${item.nombre}.
                      ${fechaInicio}
                      ${fechaTermino}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
