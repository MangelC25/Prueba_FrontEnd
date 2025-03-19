import { useState } from "react";
import { FaEdit, FaTrash, FaSortUp, FaSortDown } from "react-icons/fa";

export default function ProductList({
  products,
  onDeleteProduct,
  onEditProduct,
}) {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc"); // Estado para el orden: "asc" o "desc"

  const handleSelect = (id) => {
    setSelectedRowId((prevId) => (prevId === id ? null : id));
  };

  // Función para alternar el orden
  const toggleOrder = () => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Crear una copia ordenada de los productos según el criterio seleccionado
  const sortedProducts = [...products].sort((a, b) => {
    if (!sortBy) return 0; // Sin criterio, no ordenamos

    let comparison = 0;
    if (sortBy === "codigo") {
      comparison = a.id - b.id;
    } else if (sortBy === "nombre") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "cantidad") {
      comparison = a.quantity - b.quantity;
    } else if (sortBy === "creacion") {
      comparison = new Date(a.createdAt) - new Date(b.createdAt);
    }
    // Si el orden es descendente, invertimos el resultado
    return order === "asc" ? comparison : -comparison;
  });

  return (
    <div className="products-list">
      <div className="filters">
        <label>
          Ordenar por:
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">-- Seleccionar --</option>
            <option value="codigo">Código</option>
            <option value="nombre">Nombre</option>
            <option value="cantidad">Cantidad</option>
            <option value="creacion">Fecha de Creación</option>
          </select>
        </label>
        {/* Mostrar el botón de orden solo si se ha seleccionado un criterio */}
        <button onClick={toggleOrder} id="orderTable">
          {order === "asc" ? <FaSortUp /> : <FaSortDown />}
        </button>
      </div>
      <div className="products">
        <article id="productsList-Title">
          <h2>Lista de Productos</h2>
        </article>
        <div className="products-container">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Fecha de Creación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => handleSelect(product.id)}
                  className={`product ${
                    selectedRowId === product.id ? "selected" : ""
                  }`}
                >
                  <td>{String(product.id).padStart(5, "0")}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.createdAt}</td>
                  <td>
                    <div className="actions">
                      <button
                        title="Editar"
                        className="edit"
                        onClick={() => onEditProduct(product)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        title="Eliminar"
                        className="delete"
                        onClick={() => onDeleteProduct(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
