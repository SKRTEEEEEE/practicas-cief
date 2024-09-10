import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {


    return (
        <>
            <footer>
                <div className='about'>
                    <div className='logo-footer'>logo</div>
                    <div className="menu-footer">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className='terms'>
                <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions!</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;