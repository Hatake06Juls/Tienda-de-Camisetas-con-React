function FooterTienda() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <a className="brand" href="#top">
              <b style={{ font: "800 1.2rem var(--display)" }}>KULT</b>
              <small>Studio</small>
            </a>
            <p>
              Operando en la intersección del brutalismo subcultural, manipulación de serigrafía de alta
              densidad y cortes arquitectónicos pesados.
            </p>
            <div className="chips mono">
              <span>Certified 280GSM</span>
              <span>100% Organic</span>
            </div>
          </div>

          <div>
            <h4>Catálogo</h4>
            <ul>
              <li>
                <a href="#catalogo">Todas las prendas</a>
              </li>
              <li>
                <a href="#catalogo">Nuevos lanzamientos</a>
              </li>
              <li>
                <a href="#catalogo">Gráficos pesados</a>
              </li>
              <li>
                <a href="#catalogo">Boxy &amp; Oversized</a>
              </li>
              <li>
                <a href="#catalogo">Colección Permanente</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Atención al Cliente</h4>
            <ul>
              <li>
                <a href="#contacto">Soporte y Contacto</a>
              </li>
              <li>
                <a href="#login">Rastreo de envíos</a>
              </li>
              <li>
                <a href="#catalogo">Guía de tallas</a>
              </li>
              <li>
                <a href="#contacto">Envíos nacionales</a>
              </li>
              <li>
                <a href="#registro">Membresía privada</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Red Oficial</h4>
            <ul id="lista">
              <li>
                <a href="#top">
                  INSTAGRAM <span>[EXT]</span>
                </a>
              </li>
              <li>
                <a href="#top">
                  DISCORD ARCHIVE <span>[EXT]</span>
                </a>
              </li>
              <li>
                <a href="#top">
                  SPOTIFY TRANSMISSIONS <span>[EXT]</span>
                </a>
              </li>
              <li>
                <a href="#contacto">Sede Bogotá // Medellín</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fbot mono">
          <span className="l">
            © 2026 KULT STUDIO Inc. • Todos los derechos reservados • <b>Tienda oficial Colombia</b>
          </span>
          <span className="pay">
            <span>🔒 Cifrado SSL 256-bit</span>
            <span>Wompi // PSE // Tarjetas</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default FooterTienda;