import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductList() {
  const initialData = [
    { id: 101, name: "Laptop HP", quantity: 10, createdAt: "2024-03-10" },
    {
      id: 102,
      name: "Teclado Mecánico",
      quantity: 25,
      createdAt: "2024-03-12",
    },
    {
      id: 103,
      name: "Mouse Inalámbrico",
      quantity: 15,
      createdAt: "2024-03-14",
    },
    {
      id: 104,
      name: "Mouse Inalámbrico",
      quantity: 15,
      createdAt: "2024-03-14",
    },
    {
      id: 105,
      name: "Mouse Inalámbrico",
      quantity: 15,
      createdAt: "2024-03-14",
    },
  ];

  // Almacena el id de la fila seleccionada
  const [selectedRowId, setSelectedRowId] = React.useState(null);

  // Función para manejar la selección de una fila
  const handleSelect = (id) => {
    setSelectedRowId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="products-list">
      <div className="filters">
        <label>
          Ordenar por:
          <select>
            <option value="">-- Seleccionar --</option>
            <option value="codigo">Código</option>
            <option value="nombre">Nombre</option>
            <option value="cantidad">Cantidad</option>
            <option value="creacion">Fecha de Creación</option>
          </select>
        </label>
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
              {initialData.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => handleSelect(product.id)}
                  // Condicionalmente aplicamos la clase "selected" si el id coincide
                  className={`product ${
                    selectedRowId === product.id ? "selected" : ""
                  }`}
                >
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.createdAt}</td>
                  <td>
                    <div className="actions">
                      <button title="Editar" className="edit">
                        <FaEdit />
                      </button>
                      <button title="Eliminar" className="delete">
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
