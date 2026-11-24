import { Link, NavLink } from "react-router-dom";
import { useCarrito } from "../context/useCarrito";

function Header({ busqueda = "", onBuscar }) {
  const { cantidadFormateada, totalFormateado, setAbierto } = useCarrito();

  return (
    <>
      <div className="ticker mono">
        <div className="wrap">
          <span>
            <b>■</b> System // Online
          </span>
          <span className="mid">
            Drop 04 / Catálogo oficial • Envíos a todo el país • Unidades numeradas
          </span>
          <span className="loc">
            Loc: BOG // Colombia &nbsp; <b>V.4.02</b>
          </span>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <Link className="brand" to="/">
            <span className="logo" aria-hidden="true">
              KULT
            </span>
            <span>
              <b>KULT</b>
              <small>Studio // Lab</small>
            </span>
          </Link>

      <nav className="main" id="nav" aria-label="Navegación principal">
                  <NavLink to="/" end className={({ isActive }) => (isActive ? "on" : undefined)}>
                    Inicio
                  </NavLink>
                  <NavLink to="/coleccion" className={({ isActive }) => (isActive ? "on" : undefined)}>
                    Colección
                  </NavLink>
                  <NavLink to="/contacto" className={({ isActive }) => (isActive ? "on" : undefined)}>
                    Contacto
                  </NavLink>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? "on" : undefined)}>
                    Acceso Clientes
                  </NavLink>
                  <NavLink to="/admin" className={({ isActive }) => (isActive ? "on" : undefined)}>
                    Admin CRUD
                  </NavLink>
                </nav>

          <div className="tools">
            <label className="search">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="search"
                placeholder="Buscar prendas..."
                aria-label="Buscar"
                value={busqueda}
                onChange={(e) => onBuscar && onBuscar(e.target.value)}
              />
              <kbd>⌘K</kbd>
            </label>

            <span className="cur">COP</span>

            <button
              type="button"
              className="cart"
              aria-label="Carrito de compras"
              onClick={() => setAbierto(true)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 7h14l-1 14H6zM9 7a3 3 0 016 0" />
              </svg>
              <span className="mono" style={{ fontSize: ".65rem" }}>
                Carrito
              </span>
              <b id="carrito">{cantidadFormateada}</b>
              <span
                id="total-carrito"
                className="mono"
                style={{ fontSize: ".6rem", color: "var(--lime)", marginLeft: "5px" }}
              >
                {totalFormateado}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;