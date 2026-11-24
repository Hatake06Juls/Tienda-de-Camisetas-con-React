function Header({
  paginaActiva = "coleccion",
  cantidadCarrito = "00",
  totalTexto = "$0 COP",
  onNavegar,
}) {
  const irA = (e, vista) => {
    if (onNavegar) {
      e.preventDefault();
      onNavegar(vista);
    }
  };

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
          <a className="brand" href="#inicio" onClick={(e) => irA(e, "home")}>
            <span className="logo" aria-hidden="true">
              KULT
            </span>
            <span>
              <b>KULT</b>
              <small>Studio // Lab</small>
            </span>
          </a>

          <nav className="main" id="nav" aria-label="Navegación principal">
            <a
              href="#inicio"
              className={paginaActiva === "inicio" ? "on" : undefined}
              onClick={(e) => irA(e, "home")}
            >
              Inicio
            </a>
            <a
              href="#catalogo"
              className={paginaActiva === "coleccion" ? "on" : undefined}
              onClick={(e) => irA(e, "coleccion")}
            >
              Colección
            </a>
            <a
              href="#contacto"
              className={paginaActiva === "contacto" ? "on" : undefined}
              onClick={(e) => irA(e, "contacto")}
            >
              Contacto
            </a>
            <a href="#login" onClick={(e) => irA(e, "login")}>
              Acceso Clientes
            </a>
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
              <input type="search" placeholder="Buscar prendas..." aria-label="Buscar" />
              <kbd>⌘K</kbd>
            </label>

            <span className="cur">COP</span>

            <button className="icon-btn" type="button" aria-label="Favoritos">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 21s-8-5-8-11a5 5 0 019-3 5 5 0 019 3c0 6-8 11-8 11z" />
              </svg>
              <i>0</i>
            </button>

            <a className="cart" href="#carrito-panel" aria-label="Carrito de compras">
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
              <b id="carrito">{cantidadCarrito}</b>
              <span
                id="total-carrito"
                className="mono"
                style={{ fontSize: ".6rem", color: "var(--lime)", marginLeft: "5px" }}
              >
                {totalTexto}
              </span>
            </a>

            <button
              className="burger"
              id="burger"
              type="button"
              aria-label="Abrir menú"
              aria-expanded="false"
              aria-controls="nav"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;