import { useState } from "react";
import { formatDate } from "../helpers/formatDate";
import "../../public/css/popup.css";
import "../../public/css/cards.css";

export const ContainerCards = ({
  whatsappNumber,
  itemsToShow,
  dates,
  currentImageIndexes,
  handleNextPhoto,
  handlePreviousPhoto,
  handleFechaInicioChange,
  handleFechaTerminoChange,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const handleCardClick = (vehicle) => setSelectedVehicle(vehicle);
  const closePopup = () => setSelectedVehicle(null);
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const changeLanguage = (lang) => setSelectedLanguage(lang);
  const [numeroFoto, setNumeroFoto] = useState(1);

  const fotoChange = (val) => {
    if (val < selectedVehicle.foto.lenght) {
    }
    const totalFotos = Object.keys(selectedVehicle?.foto || {}).length;
    if (val < totalFotos) {
      return val + 1;
    } else {
      return 1;
    }
  };

  return (
    <>
      <div className="container">
        {itemsToShow.map((item, index) => {
          const photos = Object.values(item.foto);
          const mensajeWhatsapp = `Hola, me gustaría saber más sobre el ${
            item.nombre
          }.
          Fecha de inicio: ${formatDate(dates[`start-${index}`]) || ""}
          Fecha de término: ${formatDate(dates[`end-${index}`]) || ""}`;

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
                  <label htmlFor={`fechaInicio-${index}`}>
                    Fecha de inicio:
                  </label>
                  <input
                    type="date"
                    id={`fechaInicio-${index}`}
                    value={dates[`start-${index}`] || ""}
                    onChange={(e) =>
                      handleFechaInicioChange(index, e.target.value)
                    }
                    required
                  />
                  <label htmlFor={`fechaTermino-${index}`}>
                    Fecha de termino:
                  </label>
                  <input
                    type="date"
                    id={`fechaTermino-${index}`}
                    value={dates[`end-${index}`] || ""}
                    onChange={(e) =>
                      handleFechaTerminoChange(index, e.target.value)
                    }
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
                    `${mensajeWhatsapp}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar{" "}
                  <img
                    className="icono-wsp"
                    srcSet="../../public/img/icons8-whatsapp.svg"
                    alt="icono whatsapp"
                  />
                </a>
                <a className="btn-disp" onClick={() => handleCardClick(item)}>
                  Detalles
                </a>
              </div>
            </div>
          );
        })}
        {/* Popup for selected vehicle */}
        {selectedVehicle && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={closePopup}>
                X
              </span>
              <div className="control-image-popup">
                <button
                  onClick={() => setNumeroFoto(fotoChange(numeroFoto))}
                  className="popup-btn-control"
                >
                  &#10094;
                </button>

                <img
                  srcSet={selectedVehicle.foto[numeroFoto]}
                  alt={selectedVehicle.nombre}
                  className="popup-image"
                />

                <button
                  onClick={() => setNumeroFoto(fotoChange(numeroFoto))}
                  className="popup-btn-control"
                >
                  &#10095;
                </button>
              </div>

              <h2>{selectedVehicle.nombre}</h2>
              <p>{selectedVehicle.descripcion[selectedLanguage]}</p>
              <div className="botones-lang">
                <button
                  className="btn-lang"
                  onClick={() => changeLanguage("es")}
                >
                  ES
                </button>
                <button
                  className="btn-lang"
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
                <button
                  className="btn-lang"
                  onClick={() => changeLanguage("fr")}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
