export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Puedes colocar un logo o nombre de la empresa */}
        <h1>DigitalArc</h1>
      </div>
      <nav className="header__nav">
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
