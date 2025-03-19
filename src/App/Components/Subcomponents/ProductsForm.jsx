import { useState, useEffect } from "react";

export default function ProductsForm({
  onAddProduct,
  onUpdateProduct,
  nextProductId,
  editingProduct,
  clearEditing,
}) {
  const [nombre, setNombre] = useState(
    editingProduct ? editingProduct.name : ""
  );
  const [descripcion, setDescripcion] = useState(
    editingProduct ? editingProduct.description : ""
  );

  const [cantidad, setCantidad] = useState(
    editingProduct ? String(editingProduct.quantity) : "1"
  );
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setNombre(editingProduct.name);
      setDescripcion(editingProduct.description);
      setCantidad(String(editingProduct.quantity));
    } else {
      setNombre("");
      setDescripcion("");
      setCantidad("1");
    }
  }, [editingProduct]);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Los meses inician en 0
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    setCurrentDate(formattedToday);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(cantidad) <= 0) {
      alert("La cantidad debe ser mayor a 0.");
      return;
    }

    const productData = {
      id: editingProduct ? editingProduct.id : nextProductId,
      name: nombre,
      description: descripcion,
      quantity: Number(cantidad),
      createdAt: currentDate,
    };

    if (editingProduct) {
      onUpdateProduct(productData);
      clearEditing();
    } else {
      onAddProduct(productData);
    }

    if (!editingProduct) {
      setNombre("");
      setDescripcion("");
      setCantidad("1");
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group inline">
        <label htmlFor="codigo">Código</label>
        <span id="codigo">
          {String(editingProduct ? editingProduct.id : nextProductId).padStart(
            5,
            "0"
          )}
        </span>
      </div>
      <div className="form-group inline">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group inline">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          min="1"
        />
      </div>
      <div className="form-group inline">
        <label htmlFor="fecha">Fecha de Creación</label>
        <span id="fecha">{currentDate}</span>
      </div>
      <div className="ActionsForm">
        <button type="submit">
          {editingProduct ? "Actualizar Producto" : "Agregar Producto"}
        </button>
        {editingProduct && (
          <button type="button" onClick={clearEditing}>
            Cancelar Edición
          </button>
        )}
      </div>
    </form>
  );
}
