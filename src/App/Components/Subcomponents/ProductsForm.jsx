export default function ProductsForm() {
    return (
      <form className="product-form">
        <div className="form-group inline">
          <label htmlFor="codigo">Código</label>
          <input type="number" id="codigo" name="codigo" placeholder="Código" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
        </div>
        <div className="form-group inline">
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id="cantidad" name="cantidad" placeholder="Cantidad" />
        </div>
        <div className="form-group inline">
          <label htmlFor="fecha">Fecha de Creación</label>
          <input type="date" id="fecha" name="fecha" placeholder="Fecha de Creación" />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    );
  }