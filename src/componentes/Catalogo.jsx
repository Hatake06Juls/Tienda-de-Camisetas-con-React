import Producto from "./Producto";

function Catalogo({ productos = [], onAgregar }) {
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {productos.map((item) => (
        <Producto
          key={item.id}
          imagen={item.img}
          alt={item.alt}
          badge={item.badge}
          badgeClass={item.badgeClass}
          gsm={item.gsm}
          sku={item.sku}
          fit={item.fit}
          nombre={item.nombre}
          precioTexto={item.precioTexto}
          precioNum={item.precioNum}
          tallasDisp={item.tallasDisp}
          tallasData={item.tallas}
          colorData={item.color}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  );
}

export default Catalogo;