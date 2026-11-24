import { useState } from "react";
import "./Coleccion.css";
import Header from "../Header";
import Catalogo from "../Catalogo";
import FooterTienda from "../FooterTienda";
import { useCarrito } from "../../context/useCarrito";

const PRODUCTOS_COLECCION = [
  {
    id: 1,
    tallas: "S,M,L,XL",
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
    tallas: "M,L,XL",
    color: "blanco",
    badge: "Limitado",
    badgeClass: "ltd",
    gsm: "280 GSM",
    img: "/img/img 2 def leppard.jpg",
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
    tallas: "S,M,L,XL",
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
    tallas: "S,M,L,XXL",
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

function MainColeccion() {
  const { agregarAlCarrito } = useCarrito();
  const [tallaActiva, setTallaActiva] = useState("todos");
  const [colorActivo, setColorActivo] = useState("todos");
  const [orden, setOrden] = useState("recientes");
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = PRODUCTOS_COLECCION.filter((item) => {
    const coincideTalla =
      tallaActiva === "todos" || item.tallas.split(",").includes(tallaActiva);
    const coincideColor =
      colorActivo === "todos" || item.color === colorActivo;
    const coincideBusqueda =
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.sku.toLowerCase().includes(busqueda.toLowerCase());
    return coincideTalla && coincideColor && coincideBusqueda;
  }).sort((a, b) => {
    if (orden === "menor") return a.precioNum - b.precioNum;
    if (orden === "mayor") return b.precioNum - a.precioNum;
    return a.id - b.id;
  });

  return (
    <>
      <Header busqueda={busqueda} onBuscar={setBusqueda} />

      <section className="phead" id="catalogo">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="eyebrow mono">Catálogo técnico SS25 // Serie 04</p>
              <h1>Colección / Camisetas gráficas &amp; oversized</h1>
            </div>
            <div className="ctrl">
              <div className="mono">
                Mostrando: <b>{productosFiltrados.length} productos</b>
              </div>
              <label className="mono">
                Ordenar:
                <select
                  aria-label="Ordenar productos"
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                >
                  <option value="recientes">Más recientes</option>
                  <option value="menor">Precio: menor a mayor</option>
                  <option value="mayor">Precio: mayor a menor</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </section>

      <main className="wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div className="filtros-container" style={{ marginBottom: "24px", textAlign: "center" }}>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: "10px" }}>
            [ FILTRAR POR TALLA ]
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {["todos", "S", "M", "L", "XL"].map((talla) => (
              <button
                key={talla}
                type="button"
                className={`btn ${tallaActiva === talla ? "lime" : "dark"}`}
                onClick={() => setTallaActiva(talla)}
              >
                {talla === "todos" ? "Todos" : talla}
              </button>
            ))}
          </div>
        </div>

        <div className="filtros-container" style={{ marginBottom: "30px", textAlign: "center" }}>
          <p className="mono" style={{ color: "var(--muted)", marginBottom: "10px" }}>
            [ FILTRAR POR PIGMENTO / COLOR ]
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {[
              { id: "todos", label: "Todos" },
              { id: "gris", label: "Gris" },
              { id: "blanco", label: "Blanco" },
              { id: "rojo", label: "Rojo" },
              { id: "azul", label: "Azul" },
            ].map((col) => (
              <button
                key={col.id}
                type="button"
                className={`btn ${colorActivo === col.id ? "lime" : "dark"}`}
                onClick={() => setColorActivo(col.id)}
              >
                {col.label}
              </button>
            ))}
          </div>
        </div>

        {productosFiltrados.length > 0 ? (
          <Catalogo productos={productosFiltrados} onAgregar={agregarAlCarrito} />
        ) : (
          <p className="mono" style={{ textAlign: "center", padding: "40px 0" }}>
            No hay prendas que coincidan con esos filtros.
          </p>
        )}
      </main>

      <FooterTienda />
    </>
  );
}

export default MainColeccion;