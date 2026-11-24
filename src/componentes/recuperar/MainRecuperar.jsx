import { Link } from "react-router-dom";

function MainRecuperar() {
  return (
    <>
      <main className="auth-main center-view">
        <section className="recovery-card" aria-labelledby="t-rec">
          <div>
            <h1 id="t-rec">Recuperar clave de acceso</h1>
            <p className="lead">
              Ingresa la dirección de correo electrónico vinculada a tu cuenta de KULT STUDIO. Te enviaremos
              un token criptográfico de un solo uso para reestablecer tu contraseña.
            </p>
          </div>

          <form
            id="rec"
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="f">
              <div className="lrow">
                <label className="mono" htmlFor="em">
                  Correo electrónico registrado
                </label>
                <small>[Obligatorio]</small>
              </div>
              <div className="field" id="box">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-4 8" />
                </svg>
                <input
                  id="em"
                  type="email"
                  placeholder="ejemplo@dominio.co"
                  autoComplete="email"
                  aria-describedby="m"
                  required
                />
              </div>
              <div className="msg" id="m" aria-live="polite" />
            </div>

            <button className="cta" id="go" type="submit">
              Enviar enlace de recuperación
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M1 6h13M9 1l5 5-5 5" />
              </svg>
            </button>

            <div className="ok-box" id="ok" role="status">
              Si el correo está registrado, recibirás el enlace en unos minutos. Revisa también tu carpeta de
              spam o correo no deseado.
            </div>
          </form>

          <div className="recovery-foot mono">
            <p>
              <svg
                width="14"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c6f500"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="1" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              <span>Enlace seguro con expiración automática de 15 minutos</span>
            </p>
            <Link to="/login">¿Recordaste tu clave? [Volver a iniciar sesión]</Link>
          </div>
        </section>
      </main>

      <footer className="auth-foot">
        <span>© 2026 KULT STUDIO Inc. Protocolo seguro // Bogotá, Colombia</span>
        <span className="ok">Edición limitada • Seguridad activa</span>
      </footer>
    </>
  );
}

export default MainRecuperar;