import { useRef, useState, useEffect } from "react";

export default function MainLayout({ children }) {
  const honeycombRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (honeycombRef.current) {
        setWidth(honeycombRef.current.offsetWidth);
        setHeight(honeycombRef.current.offsetHeight);
      }
    }
    // Mide al inicio
    handleResize();

    // Vuelve a medir cuando se redimensione la ventana
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tamaños aproximados de cada hexágono
  const HEX_WIDTH = 100;
  const HEX_HEIGHT = 110;

  // Calculamos cuántos hexágonos caben en cada fila (en ancho)
  const hexPerRow = Math.max(1, Math.ceil(width / HEX_WIDTH));

  // Calculamos cuántas filas caben (en alto)
  const rowCount = Math.max(20, Math.ceil(height / HEX_HEIGHT));

  // Generamos el array bidimensional
  const rows = [];
  for (let r = 0; r < rowCount; r++) {
    rows.push(Array(hexPerRow).fill(null));
  }

  return (
    <main className="main">
      <div className="honeycomb" ref={honeycombRef}>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_, hexIndex) => (
              <div key={hexIndex} className="hexagon"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="container">
        <div className="section-title">
          <h1>Gestión de Productos</h1>
          <p></p>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </main>
  );
}
