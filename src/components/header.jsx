import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Gerenciar o estado para abrir e fechar o overlay
  const [isOpen, setIsOpen] = useState(false);

  // Funções para abrir e fechar o menu
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <nav>
      <div className='logo-nav'>
        <Link to='/'>
        <img src="../img/moto2go_clear.png" alt="" srcset="" />
        </Link>
      </div>

      {/* Botão para abrir o overlay */}
      <span className="menu" onClick={openNav} style={{ cursor: "pointer" }}>
        &#9776;
      </span>

      {/* Overlay */}
      <div
        id="myNav"
        className="overlay"
        style={{ height: isOpen ? "100%" : "0" }}
      >
        {/* Botão para fechar o overlay */}
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>

        {/* Conteúdo do overlay */}
        <div className="overlay-content">
        <Link to="/">
            <p>home</p>
          </Link>
          <Link to="/sobre">
            <p>Sobre</p>
          </Link>
          <Link to='/cliente'>
          <p>cliente</p>
          </Link>
          <Link to="/contacto">
            <p>contacto</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
