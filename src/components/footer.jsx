import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './footer.css'

function Footer() {


    return (
        <>
            <footer id='contacto'>
                <div className='sobre'>
                    <div className='logo-footer'>
                        <img src="/img/moto2go_clear.png" alt="" srcset="" />
                    </div>
                    <div className="menu-footer">
                        <a href="#">sobre</a>
                        <a href="#">servicios</a>
                        <a href="#">cliente</a>
                        <a href="#contacto">Contacto</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Terms and Conditions!</a>
                    </div>
                </div>
                <div className='termos-container'>
                    <div className='contacto'>
                        <div className="donde">
                            <h3 className='h3-footer'>donde encontranos</h3>
                            <p>endereco: Plaza España, 25, 08870 Sitges, Barcelona</p>
                            <p>telefono: +34611788889</p>
                            <p>email: email@email.com</p>

                        </div>
                        <div className="hora-trabajo">
                            <h3 className='h3-footer'>Horario</h3>
                            {/* NOTA */}
                            {/* Aquí podemos hacer una función para que el día de la semana esté activo (por ejemplo, si hoy es miércoles, se resalta el miércoles para que el cliente sepa si está abierto o no) */}
                            <p className='dias-de-la-semana'>lunes <span>10am - 19pm</span></p>
                            <p className='dias-de-la-semana'>martes <span>10am - 19pm</span></p>
                            <p className='dias-de-la-semana'>miercules <span>10am - 19pm</span></p>
                            <p className='dias-de-la-semana'>jueves <span>10am - 19pm</span></p>
                            <p className='dias-de-la-semana'>viernes <span>10am - 19pm</span></p>
                            <p className='dias-de-la-semana'>sabado <span>9am - 20pm</span></p>
                            <p className='dias-de-la-semana'>domingo <span>9am - 18pm</span></p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;