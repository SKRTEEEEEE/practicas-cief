import React, { useState } from 'react';

function Header() {
  // Gerenciar o estado para abrir e fechar o overlay
  const [isOpen, setIsOpen] = useState(false);

  // Funções para abrir e fechar o menu
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <nav>
      <div className='logo-nav'>
      <img src="/public/img/moto2go_clear.png" alt="" srcset="" />
      </div>
      {/* Botão para abrir o overlay */}
      <span className='menu' onClick={openNav} style={{ cursor: 'pointer' }}>&#9776;</span>

      {/* Overlay */}
      <div id="myNav" className="overlay" style={{ height: isOpen ? '100%' : '0' }}>
        
        {/* Botão para fechar o overlay */}
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        
        {/* Conteúdo do overlay */}
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#contacto">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
