import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductList({ products, onDeleteProduct, onEditProduct,
}) {
  const [selectedRowId, setSelectedRowId] = useState(null);

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
              {products.map((product) => (
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
                      <button title="Editar" className="edit" onClick={() => onEditProduct(product)}>
                        <FaEdit />
                      </button>
                      <button title="Eliminar" className="delete" onClick={() => onDeleteProduct(product.id)}>
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
