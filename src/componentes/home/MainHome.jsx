import { useEffect, useState } from "react";
import "../coleccion/Coleccion.css";
import "./Home.css";
import Header from "../Header";
import Catalogo from "../Catalogo";
import FooterTienda from "../FooterTienda";
import { useCarrito } from "../../context/useCarrito";
import api from "../../servicios/api";

const DESTACADOS_RESPALDO = [
  {
    id: 1,
    tallas: "S,M,L,XL",
    color: "gris",
    badge: "Drop 04",
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
];

function MainHome() {
  const { agregarAlCarrito } = useCarrito();
  const [destacados, setDestacados] = useState(DESTACADOS_RESPALDO);

  useEffect(() => {
    api
      .get("/productos")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const adaptados = res.data.slice(0, 3).map((p) => ({
            id: p.id_producto,
            tallas: p.tallas || "S,M,L,XL",
            color: p.color || "gris",
            badge: p.badge || "Drop 04",
            badgeClass: p.badgeClass || "",
            gsm: p.gsm || "280 GSM",
            img: p.img || "/img/img 1 acdc.jpg",
            alt: p.alt || p.nombre,
            sku: p.sku || `SKU: KLT-04-${p.id_producto}`,
            fit: p.fit || "Oversized",
            nombre: p.nombre,
            precioNum: Number(p.precio) || 0,
            precioTexto: `$${(Number(p.precio) || 0).toLocaleString("es-CO")} COP`,
            tallasDisp: p.tallasDisp || "S M L XL",
          }));
          setDestacados(adaptados);
        }
      })
      .catch((err) => {
        console.warn("Usando destacados locales:", err.message);
      });
  }, []);

  return (
    <>
      <Header />

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <p className="tag mono">Drop 04 // Lanzamiento Oficial</p>
            <h1 style={{ marginTop: "16px" }}>
              Streetwear arquitectónico &amp; gráfica pesada
            </h1>
            <p className="lead">
              Prendas confeccionadas en algodón orgánico de 280 GSM con serigrafía de alta
              densidad y siluetas boxy &amp; oversized numeradas.
            </p>
            <div className="hero-actions">
              <a href="#destacados" className="btn lime">
                Explorar Drop 04
              </a>
              <a href="#categorias" className="btn dark">
                Ver categorías
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img src="/img/img 4 nirvana.jpg" alt="Edición destacada Nirvana" />
            <div className="hero-meta mono">
              <span>EDICIÓN NUMERADA // 150 UDS</span>
              <b>280 GSM</b>
            </div>
          </div>
        </div>
      </section>

      <section className="home-sec" id="categorias">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow mono">[ Líneas de archivo ]</p>
              <h2>Categorías principales</h2>
            </div>
          </div>

          <div className="cat-grid">
            <article className="cat-card">
              <small className="mono">01 // Bandas &amp; Archivo</small>
              <h3>Gráficas pesadas</h3>
              <p>Estampados en plastisol y relieve con estética brutalista y lavado vintage.</p>
            </article>

            <article className="cat-card">
              <small className="mono">02 // Silueta</small>
              <h3>Boxy &amp; Oversized</h3>
              <p>Hombros caídos, cuello acanalado de alto gramaje y caída estructurada.</p>
            </article>

            <article className="cat-card">
              <small className="mono">03 // Permanente</small>
              <h3>Esenciales KULT</h3>
              <p>Básicos monocromáticos sin estampado frontal listos para uso diario.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-sec" id="destacados">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow mono">[ Selección del mes ]</p>
              <h2>Destacados del Drop 04</h2>
            </div>
          </div>

          <Catalogo productos={destacados} onAgregar={agregarAlCarrito} />
        </div>
      </section>

      <FooterTienda />
    </>
  );
}

export default MainHome;