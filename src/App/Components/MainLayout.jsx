export default function MainLayout({ children }) {
  return (
    <main className="main">
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
