import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        {/* Puedes colocar un logo o nombre de la empresa */}
        <h1>DigitalArc</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#acerca">Acerca de</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
