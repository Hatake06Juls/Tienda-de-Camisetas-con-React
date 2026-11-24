import "./Coleccion.css";
import Header from "../Header";
import Catalogo from "../Catalogo";
import FooterTienda from "../FooterTienda";

const PRODUCTOS_COLECCION = [
  {
    id: 1,
    tallas: "S",
    color: "gris",
    badge: "Popular",
    badgeClass: "hot",
    gsm: "280 GSM",
    img: "/img/img 1 acdc.jpg",
    alt: "Camiseta Band ACDC",
    sku: "SKU: KLT-04-ACD",
    fit: "Boxy fit",
    nombre: "Camiseta ACDC",
    precioTexto: "$99.000 COP",
    precioNum: 99000,
    tallasDisp: "S M L XL",
  },
  {
    id: 2,
    tallas: "M",
    color: "blanco",
    badge: "Limitado",
    badgeClass: "ltd",
    gsm: "280 GSM",
    img: "/img/img 2 def leppard.jpg", // <-- Verifica que coincida exactamente con el nombre de tu archivo en public/img/
    alt: "Camiseta Def Leppard",
    sku: "SKU: KLT-04-CYB",
    fit: "Oversized",
    nombre: "Camiseta Def Leppard",
    precioTexto: "$110.000 COP",
    precioNum: 110000,
    tallasDisp: "M L XL",
  },
  {
    id: 3,
    tallas: "L",
    color: "rojo",
    badge: "Heavy slab",
    badgeClass: "",
    gsm: "280 GSM",
    img: "/img/img 3 alice in chains.jpg",
    alt: "Camiseta Alice In Chains",
    sku: "SKU: KLT-04-CRS",
    fit: "Oversized",
    nombre: "Camiseta Alice in Chains",
    precioTexto: "$110.000 COP",
    precioNum: 110000,
    tallasDisp: "S M L XL",
  },
  {
    id: 4,
    tallas: "S,M,L",
    color: "azul",
    badge: "Horma over",
    badgeClass: "",
    gsm: "280 GSM",
    img: "/img/img 4 nirvana.jpg",
    alt: "Camiseta Nirvana",
    sku: "SKU: KLT-04-RAW",
    fit: "Boxy fit",
    nombre: "Camiseta Nirvana",
    precioTexto: "$110.000 COP",
    precioNum: 110000,
    tallasDisp: "S M L XXL",
  },
];

function MainColeccion({ onNavegar }) {
  const manejarAgregar = (prenda) => {
    console.log("Agregado:", prenda);
  };

  return (
    <>
      <Header
        paginaActiva="coleccion"
        cantidadCarrito="00"
        totalTexto="$0 COP"
        onNavegar={onNavegar}
      />

      <section className="phead" id="catalogo">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="eyebrow mono">Catálogo técnico SS25 // Serie 04</p>
              <h1>Colección / Camisetas gráficas &amp; oversized</h1>
            </div>
            <div className="ctrl">
              <div className="mono">
                Catálogo activo: <b>24 productos disponibles</b>
              </div>
              <label className="mono">
                Ordenar:
                <select aria-label="Ordenar productos" defaultValue="Más recientes">
                  <option value="Más recientes">Más recientes</option>
                  <option value="Precio: menor a mayor">Precio: menor a mayor</option>
                  <option value="Precio: mayor a menor">Precio: mayor a menor</option>
                  <option value="Más vendidos">Más vendidos</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="strip mono">
          <div className="wrap">
            <span>
              <span className="a">Algodón orgánico peinado</span> &nbsp;•&nbsp; Serigrafía de alta
              densidad &nbsp;•&nbsp; Corte arquitectónico caído
            </span>
            <span>
              Producción limitada: <b>150 uds / modelo</b>
            </span>
          </div>
        </div>
      </section>

      <main className="wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div className="active mono" style={{ marginBottom: "20px" }}>
          <span>Filtros activos:</span>
          <button type="button" className="l">
            Tallas: S, M, L ×
          </button>
        </div>

        <div className="filtros-container" id="filtros-tallas" style={{ marginBottom: "30px", textAlign: "center" }}>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: "12px" }}>
            [ FILTRAR POR TALLA ]
          </p>
          <div
            className="tallas-grupo"
            style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}
          >
            {["todos", "S", "M", "L", "XL"].map((talla) => (
              <button key={talla} type="button" className="filtro-talla btn dark" data-talla={talla}>
                {talla === "todos" ? "Todos" : talla}
              </button>
            ))}
          </div>
        </div>

        <div className="filtros-container" id="filtros-colores" style={{ marginBottom: "30px", textAlign: "center" }}>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: "12px" }}>
            [ FILTRAR POR PIGMENTO / COLOR ]
          </p>
          <div
            className="colores-grupo"
            style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}
          >
            {[
              { id: "todos", label: "Todos" },
              { id: "gris", label: "Gris" },
              { id: "blanco", label: "Blanco" },
              { id: "rojo", label: "Rojo" },
              { id: "azul", label: "Azul" },
            ].map((col) => (
              <button key={col.id} type="button" className="filtro-color btn dark" data-color={col.id}>
                {col.label}
              </button>
            ))}
          </div>
        </div>

        <Catalogo productos={PRODUCTOS_COLECCION} onAgregar={manejarAgregar} />

        <div className="more mono">
          <span>
            Mostrando 4 de 24 productos disponibles • <b>17% completado</b>
          </span>
          <div className="bar">
            <i style={{ width: "17%" }} />
          </div>
          <button className="btn dark" type="button">
            Cargar más camisetas ⌄
          </button>
          <span style={{ fontSize: ".6rem" }}>
            Sistema de despacho inmediato // Disponibilidad en tiempo real
          </span>
        </div>
      </main>

      <div className="wrap">
        <div className="specs">
          <article className="spec">
            <small className="mono">[Especificación 01]</small>
            <h3>Algodón 100% orgánico</h3>
            <p>
              Tejido tubular de punto grueso hilado en anillos con acabado pre-encogido para garantizar
              que las dimensiones originales se mantengan idénticas.
            </p>
          </article>

          <article className="spec">
            <small className="mono">[Especificación 02]</small>
            <h3>Serigrafía puff &amp; plastisol</h3>
            <p>
              Proceso manual de serigrafía en talleres de Bogotá y Medellín. Tintas ecológicas con
              relieve 3D arquitectónico.
            </p>
          </article>

          <article className="spec">
            <small className="mono">[Especificación 03]</small>
            <h3>Corte oversized real</h3>
            <p>
              Patrones no basados en agrandar tallas estándar. Silueta cuadrada boxy construida desde cero
              con hombros desplazados y cuello cerrado no deformable.
            </p>
          </article>
        </div>
      </div>

      <FooterTienda onNavegar={onNavegar} />
    </>
  );
}

export default MainColeccion;