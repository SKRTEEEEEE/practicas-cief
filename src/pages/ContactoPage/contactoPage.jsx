import React, { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import HeaderComp from '../../components/header'
import Footer from '../../components/footer';
//import data from '../../../apiKey.json'
import './contactoPage.css'

function Contacto() {
    const position = { lat: 41.23635632831617, lng: 1.8056280831165197 };
    //const [open, setOpen] = useState(false)
    const whatsappNumber = +34611788889;
    const whatsappMessage = 'Hola, me gustaría saber más sobre sus servicios.';
    //const dataJson = data;
    return (
        <div>
            <HeaderComp />
            <section className='contacto-page'>
                <div className='container-title'>
                    <h2 className='h2-class'>Contacto</h2>
                </div>

                <div className="container-ubicacion">
                    <div className="contacto-ubicacion">
                        <h3>dónde encontrarnos</h3>
                        <p>dirección: Plaza España, 25, 08870 Sitges, Barcelona {/* <span><a href={redirtectToMap} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-map-pin"></i></a></span> */}</p>
                        <p>teléfono: +34611788889 {/* <a className='a-whats' href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a> */}</p>
                        <p>correo electrónico: email@email.com</p>
                    </div>
                    <div className="mapa">
                        <a href="https://maps.app.goo.gl/UH9Q6hvPZvU4yzN87" target="_blank" rel="noopener noreferrer">
                            <img src="../../../img/map_moto2Go.png" alt="" />
                        </a>
                    </div>
                </div>
                {/* <APIProvider apiKey="AIzaSyDsdw3Jt90NOor9eGU9oeusrRp1d3wuJt8">
                    <div className="mapa">
                        <Map zoom={19} center={position}></Map>
                    </div>
                </APIProvider> */}

            </section>
            <Footer/>
        </div>

    );
}

export default Contacto;