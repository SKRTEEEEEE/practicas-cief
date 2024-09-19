import React, { useState } from "react";
import data from "../../../data.json";
import imagenes from "../../../backgroundIMG.json";

const images = imagenes;
const motos = data.filter((item) => item.tipo === "moto");
const bicicletas = data.filter((item) => item.tipo === "bicicleta");

function HomePage() {
  const whatsappNumber = "+34671222750";

  const [slideIndex, setSlideIndex] = useState(1);
  const [show, setShow] = useState("moto");
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(motos.length).fill(0)
  );
  const [dates, setDates] = useState({}); // Estado para armazenar datas por índice

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Se o campo estiver vazio, retorna uma string vazia
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

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
    setShow("motos");
  };

  const handleShowBicicletas = () => {
    setShow("bicicletas");
  };

  const handleNextPhoto = (index, photos) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = prevIndexes[index] === photos.length - 1 ? 0 : prevIndexes[index] + 1;
      return newIndexes;
    });
  };

  const handlePreviousPhoto = (index, photos) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = prevIndexes[index] === 0 ? photos.length - 1 : prevIndexes[index] - 1;
      return newIndexes;
    });
  };

  const handleFechaInicioChange = (index, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [`start-${index}`]: value
    }));
  };

  const handleFechaTerminoChange = (index, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [`end-${index}`]: value
    }));
  };

  const itemsToShow = show === "motos" ? motos : bicicletas;

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
            <img className="img-head" src={image.src} alt={`Slide ${index + 1}`} />
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
        <h2>{show === "motos" ? "Motocicletas" : "Bicicletas"} disponibles</h2>
        <div className="selector-vehiculos">
          <button className="button-motos" onClick={handleShowMotos}>
            Motos
          </button>
          <button className="button-bicis" onClick={handleShowBicicletas}>
            Bicicletas
          </button>
        </div>

        <div className="container">
          {itemsToShow.map((item, index) => {
            const photos = Object.values(item.foto);

            return (
              <div className="card" key={index}>
                <div className="image-container">
                  <img
                    className="img-disp"
                    src={photos[currentImageIndexes[index]]}
                    alt={item.nombre}
                  />
                  {photos.length > 1 && (
                    <div className="image-controls">
                      <button
                        onClick={() => handlePreviousPhoto(index, photos)}
                        className="btn-control"
                      >
                        &#10094;
                      </button>
                      <button
                        onClick={() => handleNextPhoto(index, photos)}
                        className="btn-control"
                      >
                        &#10095;
                      </button>
                    </div>
                  )}
                </div>
                <div className="info-card">
                  <h3 className="h3-disp">{item.nombre}</h3>

                  <div className="fecha-container">
                    <label htmlFor={`fechaInicio-${index}`}>Fecha de inicio:</label>
                    <input
                      type="date"
                      id={`fechaInicio-${index}`}
                      value={dates[`start-${index}`] || ""}
                      onChange={(e) => handleFechaInicioChange(index, e.target.value)}
                      required
                    />
                    <label htmlFor={`fechaTermino-${index}`}>Fecha de termino:</label>
                    <input
                      type="date"
                      id={`fechaTermino-${index}`}
                      value={dates[`end-${index}`] || ""}
                      onChange={(e) => handleFechaTerminoChange(index, e.target.value)}
                      required
                    />
                  </div>

                  <p className="price-disp">Fianza: {item.fianza} €</p>
                  <p className="price-disp">Precio: {item.precio} €</p>
                </div>
                <div className="button-container">
                  <a
                    className="btn-disp"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hola, me gustaría saber más sobre el ${item.nombre}.
                      Fecha de inicio: ${formatDate(dates[`start-${index}`]) || ""}
                      Fecha de término: ${formatDate(dates[`end-${index}`]) || ""}`
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
