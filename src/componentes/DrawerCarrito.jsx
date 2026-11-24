import { useCarrito } from "../context/useCarrito";

function DrawerCarrito() {
  const {
    items,
    abierto,
    setAbierto,
    quitarDelCarrito,
    vaciarCarrito,
    totalFormateado,
  } = useCarrito();

  if (!abierto) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 100,
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => setAbierto(false)}
    >
      <aside
        style={{
          width: "min(400px, 100%)",
          background: "var(--deep)",
          borderLeft: "1px solid var(--line)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--line)",
              paddingBottom: "14px",
              marginBottom: "18px",
            }}
          >
            <h3 style={{ fontSize: "1.1rem" }}>Carrito KULT</h3>
            <button
              type="button"
              className="btn dark"
              style={{ minHeight: "34px", padding: "6px 12px" }}
              onClick={() => setAbierto(false)}
            >
              Cerrar ×
            </button>
          </div>

          {items.length === 0 ? (
            <p className="mono" style={{ color: "var(--muted)" }}>
              Tu carrito está vacío. Agrega una prenda del catálogo.
            </p>
          ) : (
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {items.map((item) => (
                <li
                  key={item.nombre}
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    padding: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", fontSize: ".9rem" }}>{item.nombre}</b>
                    <small className="mono" style={{ color: "var(--lime)" }}>
                      {item.cantidad} x ${(item.precioNum || 0).toLocaleString("es-CO")} COP
                    </small>
                  </div>
                  <button
                    type="button"
                    className="btn dark"
                    style={{ minHeight: "32px", padding: "4px 10px" }}
                    onClick={() => quitarDelCarrito(item.nombre)}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
            <div
              className="mono"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "14px",
                fontSize: ".85rem",
              }}
            >
              <span>Total estimado:</span>
              <b style={{ color: "var(--lime)" }}>{totalFormateado}</b>
            </div>
            <button
              type="button"
              className="cta"
              onClick={() => {
                alert("Pedido simulado enviado. ¡Pronto lo conectaremos a Spring Boot!");
                vaciarCarrito();
                setAbierto(false);
              }}
            >
              Finalizar pedido →
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default DrawerCarrito;