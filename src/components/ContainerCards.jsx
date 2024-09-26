// import { Link } from "react-router-dom";
import { useState } from "react";
import { formatDate } from "../helpers/formatDate";
import "../../public/css/VehicleCard.css";

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
                  Reservar
                </a>
                <a className="btn-disp" onClick={() => handleCardClick(item)}>
                  Detalles
                </a>
              </div>
            </div>
          );
        })}
        {/*  ------------------ Aqui va el popup junto con un condicional ---------------------- */}
        {selectedVehicle && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={closePopup}>
                X
              </span>
              <img
                srcSet={selectedVehicle.foto["1"]}
                alt={selectedVehicle.nombre}
                className="popup-image"
              />
              <h2>{selectedVehicle.nombre}</h2>
              <p>{selectedVehicle.descripcion.es}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
