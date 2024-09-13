import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import HeaderComp from '../../components/header'
import './contactoPage.css'
function Contacto() {
    const position = { lat: 41.23635632831617, lng: 1.8056280831165197 };
    //const [open, setOpen] = useState(false)
    const whatsappNumber = +34611788889;
    const whatsappMessage = 'Hola, me gustaría saber más sobre sus servicios.';
    return (
        <div>
            <HeaderComp />
            <section className='contacto-page'>
                <div className='teste'>
                    <h2 className='h2-class'>Contato</h2>
                </div>
                
                <div className="contacto-ubicacion">
                    <h3 className='h3-footer'>donde encontranos</h3>
                    <p>endereco: Plaza España, 25, 08870 Sitges, Barcelona</p>
                    <p>telefono: +34611788889 <a className='a-whats' href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a></p>
                    <p>email: email@email.com</p>
                </div>
                <APIProvider apiKey='AIzaSyDsdw3Jt90NOor9eGU9oeusrRp1d3wuJt8'>
                    <div className="mapa">
                        <Map zoom={19} center={position}></Map>
                    </div>
                </APIProvider>
                    
            </section>
        </div>

    );
}

export default Contacto;