
function MainLogin() {
  return (
    <>
      <main className="auth-main">
        <div className="auth-grid">
          <section className="auth-card">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="auth-top mono">
                <span className="tag">Fase // 04 • Auth gateway</span>
                <span>BOG</span>
              </div>
              <p className="proto">Protocolo de acceso // Miembros KULT</p>
              <h1>Iniciar sesión en KULT STUDIO</h1>
              <p className="lead">
                Identificación requerida para consultar compras, pedidos, seriales adquiridos y activaciones
                clandestinas en Colombia.
              </p>
            </div>

            <div className="visual" role="img" aria-label="Colección oficial 2026 Bogotá">
              <div className="frame"></div>
              <span className="cap mono">Colección oficial // 2024.BOG</span>
            </div>

            <div className="benefits">
              <h2>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  stroke="#c6f500"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M7 1l5.5 2v5c0 3.5-2.5 6-5.5 7-3-1-5.5-3.5-5.5-7V3z" />
                </svg>
                Beneficios de identificación
              </h2>
              <ol>
                <li>
                  <b>01.</b>
                  <span>Acceso prioritario 15 min antes a Drops limitados y cápsulas secretas.</span>
                </li>
                <li>
                  <b>02.</b>
                  <span>Historial de pedidos con rastreo sincronizado (Servientrega &amp; Coordinadora).</span>
                </li>
                <li>
                  <b>03.</b>
                  <span>Libreta de direcciones urbanas guardadas en Colombia (BOG, MDE, CLO, BAQ).</span>
                </li>
                <li>
                  <b>04.</b>
                  <span>Descarga libre de publicaciones, fanzines digitales y stems de audio KULT.</span>
                </li>
              </ol>
            </div>

            <div className="node mono">
              <span>
                Estado de nodo
                <br />
                Protocolo de acceso // Miembros KULT
              </span>
              <span className="on">Online (BOG-01)</span>
            </div>
          </section>

          <section className="auth-card" aria-label="Iniciar sesión">
            <div className="term mono">
              <span>Terminal // KULT-ID 2.4.9</span>
              <span className="dots" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>

            <form
              id="login"
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="f">
                <div className="lrow">
                  <label htmlFor="u">Identificador / Correo electrónico</label>
                  <small>[Colombia reg.]</small>
                </div>
                <div className="field">
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
                    id="u"
                    type="email"
                    placeholder="usuario@correo.co"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              <div className="f">
                <div className="lrow">
                  <label htmlFor="pw">Contraseña cifrada</label>
                  <small>
                    <a href="recuperar.html" style={{ color: "var(--lime)" }}>
                      ¿Olvidaste tu contraseña? [Recuperar clave]
                    </a>
                  </small>
                </div>
                <div className="field">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="1" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                  <input
                    id="pw"
                    type="password"
                    placeholder="••••••••••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    className="eye"
                    type="button"
                    id="eye"
                    aria-label="Mostrar contraseña"
                    aria-pressed="false"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>

              <label className="check mono" style={{ fontWeight: 400, fontSize: ".7rem" }}>
                <input type="checkbox" /> Mantener sesión activa en este dispositivo seguro
              </label>

              <button className="cta" type="submit">
                Ingresar a mi cuenta
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

              <div className="or mono">[ O continuar con ]</div>

              <div className="social">
                <button type="button">
                  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      fill="#fff"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </svg>
                  Google // OAuth
                </button>
                <button type="button">
                  <svg width="16" height="18" viewBox="0 0 384 512" fill="#fff" aria-hidden="true">
                    <path
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                  Apple // Connect
                </button>
              </div>
            </form>

            <div className="signup">
              <p>
                <span>¿Aún no tienes identificador?</span>
                Apertura de fichas sujeta a disponibilidad de cupos en Colombia.
              </p>
              <a href="registro.html">[Crear cuenta nueva]</a>
            </div>
          </section>
        </div>

        <div className="stats mono" role="status">
          <span>Lat: 4.7110° N, 74.0721° W</span>
          <span>Servidores: BOG-DC01</span>
          <span>Carga: estable // 99.98%</span>
          <span>KULT Labs Intel</span>
        </div>
      </main>
    </>
  );
}

export default MainLogin;