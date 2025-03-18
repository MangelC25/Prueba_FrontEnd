import { useState, useEffect } from "react";

export default function ProductsForm() {
  const [productCode, setProductCode] = useState("00001");

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Los meses inician en 0
    let dd = today.getDate();

    // Agregar ceros a la izquierda si es necesario
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = `${yyyy}-${mm}-${dd}`;
    setCurrentDate(formattedToday);
  }, []);

  return (
    <form className="product-form">
      <div className="form-group inline">
        <label htmlFor="codigo">Código</label>
        <span id="codigo">
          {productCode}
        </span>
      </div>
      <div className="form-group inline">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        ></textarea>
      </div>
      <div className="form-group inline">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          placeholder="Cantidad"
        />
      </div>
      <div className="form-group inline">
        <label htmlFor="fecha">Fecha de Creación</label>
        <span id="fecha">
          {currentDate}
        </span>
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}
