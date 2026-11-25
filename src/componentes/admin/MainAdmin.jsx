import { useEffect, useState } from "react";
import "../coleccion/Coleccion.css";
import "../contacto/Contacto.css";
import Header from "../Header";
import FooterTienda from "../FooterTienda";
import api from "../../servicios/api";

const FORMULARIO_INICIAL = {
  nombre: "",
  precio: "",
  id_categoria: "1",
  sku: "SKU: KLT-04-NEW",
  fit: "Oversized",
  gsm: "280 GSM",
  color: "gris",
  tallas: "S,M,L,XL",
  tallasDisp: "S M L XL",
  badge: "Drop 04",
  badgeClass: "hot",
  img: "/img/img 1 acdc.jpg",
};

function MainAdmin() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState(FORMULARIO_INICIAL);
  const [editandoId, setEditandoId] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(true);

  // 1. CONSULTA (READ -> GET /api/productos)
  const cargarProductos = async () => {
    try {
      const res = await api.get("/productos");
      setProductos(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error al consultar productos:", err);
      setMensaje("Error de conexión con Spring Boot (revisa que el puerto 8080 esté activo).");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    let activo = true;

    const iniciarConsulta = async () => {
      try {
        const res = await api.get("/productos");
        if (activo) {
          setProductos(Array.isArray(res.data) ? res.data : []);
        }
      } catch (err) {
        if (activo) {
          console.error("Error al consultar productos:", err);
          setMensaje("Error de conexión con Spring Boot (revisa que el puerto 8080 esté activo).");
        }
      } finally {
        if (activo) setCargando(false);
      }
    };

    iniciarConsulta();

    return () => {
      activo = false;
    };
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Convierte una imagen para guardarla y previsualizarla
  const manejarArchivoImagen = (e) => {
    const archivo = e.target.files?.[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onloadend = () => {
      setForm((prev) => ({ ...prev, img: lector.result }));
    };
    lector.readAsDataURL(archivo);
  };

  // 2. CREACIÓN (POST) y 3. ACTUALIZACIÓN (PUT)
  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.precio) {
      setMensaje("Por favor completa el nombre y el precio de la prenda.");
      return;
    }

    const payload = {
      nombre: form.nombre.trim(),
      precio: Number(form.precio),
      sku: form.sku,
      fit: form.fit,
      gsm: form.gsm,
      color: form.color,
      tallas: form.tallas,
      tallasDisp: form.tallas.replaceAll(",", " "),
      badge: form.badge,
      badgeClass: form.badgeClass,
      img: form.img || "/img/img 1 acdc.jpg",
      alt: form.nombre.trim(),
      categoria: {
        id_categoria: Number(form.id_categoria),
      },
    };

    try {
      if (editandoId !== null) {
        await api.put(`/productos/${editandoId}`, payload);
        setMensaje(`Producto #${editandoId} actualizado correctamente en MySQL.`);
      } else {
        await api.post("/productos", payload);
        setMensaje("Nuevo producto creado y guardado en MySQL.");
      }

      setForm(FORMULARIO_INICIAL);
      setEditandoId(null);
      cargarProductos();
    } catch (err) {
      console.error("Error en operación CRUD:", err);
      setMensaje("Error al guardar en la base de datos. Revisa la consola del navegador.");
    }
  };

  const prepararEdicion = (producto) => {
    setEditandoId(producto.id_producto);
    setForm({
      nombre: producto.nombre || "",
      precio: producto.precio || "",
      id_categoria: String(producto.categoria?.id_categoria || 1),
      sku: producto.sku || "SKU: KLT-04-NEW",
      fit: producto.fit || "Oversized",
      gsm: producto.gsm || "280 GSM",
      color: producto.color || "gris",
      tallas: producto.tallas || "S,M,L,XL",
      tallasDisp: producto.tallasDisp || "S M L XL",
      badge: producto.badge || "Drop 04",
      badgeClass: producto.badgeClass || "",
      img: producto.img || "/img/img 1 acdc.jpg",
    });
    setMensaje(`Editando producto ID #${producto.id_producto}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setForm(FORMULARIO_INICIAL);
    setMensaje("");
  };

  // 4. ELIMINACIÓN (DELETE)
  const manejarEliminar = async (id, nombre) => {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar "${nombre}" (ID #${id}) de MySQL?`
    );
    if (!confirmar) return;

    try {
      await api.delete(`/productos/${id}`);
      setMensaje(`Producto "${nombre}" eliminado de la base de datos.`);
      if (editandoId === id) {
        cancelarEdicion();
      }
      cargarProductos();
    } catch (err) {
      console.error("Error al eliminar:", err);
      setMensaje("No se pudo eliminar el producto.");
    }
  };

  return (
    <>
      <Header />

      <section className="phead">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="eyebrow mono">[ Panel CRUD // Persistencia MySQL ]</p>
              <h1>Gestión de Catálogo / KULT Studio</h1>
            </div>
            <div className="mono">
              Registros activos en BD: <b>{productos.length} productos</b>
            </div>
          </div>
        </div>
      </section>

      <main className="wrap" style={{ padding: "32px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        
        <form
          onSubmit={manejarSubmit}
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            padding: "24px",
            marginBottom: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <h2 style={{ fontSize: "1.1rem" }}>
              {editandoId !== null
                ? `Actualizar Prenda (ID #${editandoId})`
                : "Registrar Nueva Prenda (POST)"}
            </h2>
            {editandoId !== null && (
              <button type="button" className="btn dark" onClick={cancelarEdicion}>
                Cancelar edición
              </button>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div className="f">
              <label htmlFor="adm-nombre">Nombre de la camiseta *</label>
              <input
                id="adm-nombre"
                name="nombre"
                type="text"
                placeholder="Ej. Camiseta Metallica"
                value={form.nombre}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="f">
              <label htmlFor="adm-precio">Precio (COP) *</label>
              <input
                id="adm-precio"
                name="precio"
                type="number"
                placeholder="Ej. 115000"
                value={form.precio}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="f">
              <label htmlFor="adm-cat">Categoría (FK MySQL)</label>
              <select
                id="adm-cat"
                name="id_categoria"
                value={form.id_categoria}
                onChange={manejarCambio}
              >
                <option value="1">1 - Camiseta Bandas</option>
                <option value="2">2 - Camiseta Dibujos Animados</option>
                <option value="3">3 - Camiseta Películas</option>
              </select>
            </div>

            <div className="f">
              <label htmlFor="adm-color">Color / Pigmento</label>
              <select id="adm-color" name="color" value={form.color} onChange={manejarCambio}>
                <option value="gris">Gris</option>
                <option value="blanco">Blanco</option>
                <option value="rojo">Rojo</option>
                <option value="azul">Azul</option>
              </select>
            </div>

            <div className="f">
              <label htmlFor="adm-tallas">Tallas disponibles (separadas por coma)</label>
              <input
                id="adm-tallas"
                name="tallas"
                type="text"
                value={form.tallas}
                onChange={manejarCambio}
              />
            </div>

            {/* SUBIR IMAGEN DESDE EL COMPUTADOR */}
            <div className="f">
              <label htmlFor="adm-file">Subir imagen (JPG / PNG / WEBP)</label>
              <input
                id="adm-file"
                type="file"
                accept="image/*"
                onChange={manejarArchivoImagen}
                style={{ padding: "8px", cursor: "pointer" }}
              />
            </div>

            
            <div className="f">
              <label htmlFor="adm-img-url">O ruta / URL de imagen</label>
              <input
                id="adm-img-url"
                name="img"
                type="text"
                placeholder="/img/camiseta.jpg o https://..."
                value={form.img.startsWith("data:image") ? "Imagen local cargada ✓" : form.img}
                onChange={manejarCambio}
                disabled={form.img.startsWith("data:image")}
              />
            </div>
          </div>

          
          {form.img && (
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img
                src={form.img}
                alt="Vista previa"
                style={{
                  width: "64px",
                  height: "64px",
                  objectFit: "cover",
                  border: "1px solid var(--lime)",
                }}
              />
              <span className="mono" style={{ fontSize: ".75rem", color: "var(--muted)" }}>
                Vista previa de la prenda que se guardará en MySQL
              </span>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <button type="submit" className="btn lime">
              {editandoId !== null ? "Guardar cambios (PUT)" : "Crear producto en MySQL (POST)"}
            </button>

            {mensaje && (
              <span className="mono" style={{ color: "var(--lime)", fontSize: ".8rem" }}>
                {mensaje}
              </span>
            )}
          </div>
        </form>

        
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            padding: "24px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ fontSize: "1.1rem" }}>
              Inventario Sincronizado en MySQL (GET / PUT / DELETE)
            </h2>
            <button
              type="button"
              className="btn dark"
              onClick={() => {
                setCargando(true);
                cargarProductos();
              }}
            >
              Refrescar tabla
            </button>
          </div>

          {cargando ? (
            <p className="mono">Consultando API REST...</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--line)",
                    color: "var(--muted)",
                    fontSize: ".75rem",
                  }}
                  className="mono"
                >
                  <th style={{ padding: "10px" }}>ID</th>
                  <th style={{ padding: "10px" }}>Img</th>
                  <th style={{ padding: "10px" }}>Prenda</th>
                  <th style={{ padding: "10px" }}>Categoría</th>
                  <th style={{ padding: "10px" }}>Color</th>
                  <th style={{ padding: "10px" }}>Tallas</th>
                  <th style={{ padding: "10px" }}>Precio</th>
                  <th style={{ padding: "10px", textAlign: "right" }}>Acciones CRUD</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prod) => (
                  <tr key={prod.id_producto} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td className="mono" style={{ padding: "12px 10px", color: "var(--lime)" }}>
                      #{prod.id_producto}
                    </td>
                    <td style={{ padding: "12px 10px" }}>
                      <img
                        src={prod.img || "/img/img 1 acdc.jpg"}
                        alt={prod.nombre}
                        style={{
                          width: "42px",
                          height: "42px",
                          objectFit: "cover",
                          border: "1px solid var(--line)",
                        }}
                      />
                    </td>
                    <td style={{ padding: "12px 10px", fontWeight: 600 }}>{prod.nombre}</td>
                    <td className="mono" style={{ padding: "12px 10px", fontSize: ".8rem" }}>
                      {prod.categoria?.nombre || `Cat #${prod.categoria?.id_categoria}`}
                    </td>
                    <td
                      className="mono"
                      style={{
                        padding: "12px 10px",
                        textTransform: "uppercase",
                        fontSize: ".8rem",
                      }}
                    >
                      {prod.color}
                    </td>
                    <td className="mono" style={{ padding: "12px 10px", fontSize: ".8rem" }}>
                      {prod.tallas}
                    </td>
                    <td className="mono" style={{ padding: "12px 10px" }}>
                      ${Number(prod.precio).toLocaleString("es-CO")} COP
                    </td>
                    <td style={{ padding: "12px 10px", textAlign: "right" }}>
                      <div style={{ display: "inline-flex", gap: "8px" }}>
                        <button
                          type="button"
                          className="btn dark"
                          style={{ minHeight: "34px", padding: "4px 12px" }}
                          onClick={() => prepararEdicion(prod)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn dark"
                          style={{
                            minHeight: "34px",
                            padding: "4px 12px",
                            borderColor: "#ff5c5c",
                            color: "#ff7b7b",
                          }}
                          onClick={() => manejarEliminar(prod.id_producto, prod.nombre)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      <FooterTienda />
    </>
  );
}

export default MainAdmin;