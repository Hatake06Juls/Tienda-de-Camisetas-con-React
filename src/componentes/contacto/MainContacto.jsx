import { useState } from "react";
import "../coleccion/Coleccion.css";
import "./Contacto.css";
import Header from "../Header";
import FooterTienda from "../FooterTienda";

function MainContacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "Consulta de pedido",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!formulario.nombre.trim() || !formulario.correo.trim() || !formulario.mensaje.trim()) {
      return;
    }
    setEnviado(true);
    setFormulario({
      nombre: "",
      correo: "",
      asunto: "Consulta de pedido",
      mensaje: "",
    });
  };

  return (
    <>
      <Header cantidadCarrito="00" totalTexto="$0 COP" />

      <section className="phead" id="contacto">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="eyebrow mono">[ Canal directo // Soporte técnico ]</p>
              <h1>Contacto / Estudio &amp; Despachos</h1>
            </div>
            <div className="mono">
              Tiempo de respuesta estimado: <b>&lt; 24H HÁBILES</b>
            </div>
          </div>
        </div>
      </section>

      <main className="wrap contact-sec">
        <div className="contact-grid">
          <form className="contact-card" onSubmit={manejarEnvio}>
            <div>
              <p className="proto">
                Formulario <b>// Transmisión directa</b>
              </p>
              <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>
                Escríbenos sobre tallaje, pedidos personalizados, envíos nacionales o colaboraciones.
              </p>
            </div>

            <div className="contact-row">
              <div className="f">
                <div className="lrow">
                  <label htmlFor="c-nombre">
                    Nombre completo <em>*</em>
                  </label>
                </div>
                <input
                  id="c-nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej. Julián Conde"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="f">
                <div className="lrow">
                  <label htmlFor="c-correo">
                    Correo electrónico <em>*</em>
                  </label>
                </div>
                <input
                  id="c-correo"
                  name="correo"
                  type="email"
                  placeholder="usuario@dominio.com"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  required
                />
              </div>
            </div>

            <div className="f">
              <div className="lrow">
                <label htmlFor="c-asunto">Motivo de consulta</label>
              </div>
              <select
                id="c-asunto"
                name="asunto"
                value={formulario.asunto}
                onChange={manejarCambio}
              >
                <option value="Consulta de pedido">Consulta de pedido / Rastreo</option>
                <option value="Guía de tallas">Guía de tallas y medidas</option>
                <option value="Distribuidores">Distribuidores / Mayoristas</option>
                <option value="Otro">Otro requerimiento</option>
              </select>
            </div>

            <div className="f">
              <div className="lrow">
                <label htmlFor="c-mensaje">
                  Mensaje <em>*</em>
                </label>
              </div>
              <textarea
                id="c-mensaje"
                name="mensaje"
                rows="4"
                placeholder="Describe tu solicitud con número de orden si aplica..."
                value={formulario.mensaje}
                onChange={manejarCambio}
                required
              />
            </div>

            <button type="submit" className="cta">
              Enviar transmisión <span>→</span>
            </button>

            <div className={`ok-box ${enviado ? "show" : ""}`}>
              Mensaje recibido en el sistema KULT Studio. Nuestro equipo te responderá pronto al correo registrado.
            </div>
          </form>

          <aside className="info-stack">
            <article className="info-box">
              <small className="mono">[01 // Taller Central]</small>
              <h3>Bogotá D.C., Colombia</h3>
              <p>Producción textil, control de calidad 280 GSM y centro de despachos nacionales.</p>
            </article>

            <article className="info-box">
              <small className="mono">[02 // Horario Operativo]</small>
              <h3>Lunes a Sábado</h3>
              <p>Atención digital de 9:00 AM a 6:00 PM (COT). Despachos diarios vía transportadora certificada.</p>
            </article>

            <article className="info-box">
              <small className="mono">[03 // Correo Oficial]</small>
              <h3>soporte@kultstudio.co</h3>
              <p>Canal habilitado para cambios de talla, garantías y soporte postventa.</p>
            </article>
          </aside>
        </div>
      </main>

      <FooterTienda />
    </>
  );
}

export default MainContacto;