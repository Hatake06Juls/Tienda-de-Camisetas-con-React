function MainRegistro() {
  return (
    <>
      <main className="auth-main">
        <div className="auth-grid reg-grid">
          {/* Panel de Introducción Izquierdo */}
          <section className="auth-card">
            <span className="tag mono">Sistema de admisión // Protocolo CO-2024</span>
            <h1>Crear tu cuenta</h1>
            <p className="auth-sub">// Registro exclusivo drop list</p>
            <p className="lead">
              Únete a la lista privada de KULT STUDIO para adquirir drops limitados con despacho express en
              Colombia antes de cada lanzamiento global.
            </p>

            <div className="visual wide" role="img" aria-label="Espacio industrial KULT">
              <div className="mock" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="cap mono">
                <span>
                  Bogotá, Colombia // 04.6097° N, 74.0817° W
                  <br />
                  Edición serial limitada // Run 08
                </span>
                <span className="alpha">[Acceso alpha]</span>
              </div>
            </div>

            <div className="quota">
              <div className="row mono">
                <span>Disponibilidad de cupo mensual</span>
                <b>87% asignado</b>
              </div>
              <div
                className="meter"
                role="progressbar"
                aria-valuenow={87}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span style={{ width: "87%" }} />
              </div>
              <p className="mono">
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
                <span>100% datos privados // cero spam comercial // sistema v.4.02</span>
              </p>
            </div>
          </section>

          {/* Formulario de Registro Derecho */}
          <section className="auth-card" aria-labelledby="t-reg">
            <div className="card-head">
              <b id="t-reg">Datos de registro</b>
              <span>[BOG/MDE/CLO/BAQ]</span>
            </div>

            <form id="reg" className="form-grid-2" noValidate>
              <div className="f">
                <label htmlFor="n">
                  Nombres <em>*</em>
                </label>
                <input
                  id="n"
                  type="text"
                  placeholder="Ej. Mateo"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="f">
                <label htmlFor="a">
                  Apellidos <em>*</em>
                </label>
                <input
                  id="a"
                  type="text"
                  placeholder="Ej. Restrepo Cruz"
                  autoComplete="family-name"
                  required
                />
              </div>

              <div className="f full-col">
                <label htmlFor="e">
                  Correo electrónico <em>*</em>
                </label>
                <input
                  id="e"
                  type="email"
                  placeholder="identidad@dominio.co"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="f">
                <label htmlFor="t">
                  Móvil SMS drops (+57 Colombia) <em>*</em>
                </label>
                <div className="phone">
                  <span>+57</span>
                  <input
                    id="t"
                    type="tel"
                    inputMode="numeric"
                    placeholder="300 000 0000"
                    autoComplete="tel-national"
                    required
                  />
                </div>
              </div>

              <div className="f">
                <label htmlFor="c">
                  Ciudad despacho <em>*</em>
                </label>
                <select id="c" defaultValue="" required>
                  <option value="" disabled>
                    Seleccionar…
                  </option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Otra ciudad">Otra ciudad</option>
                </select>
              </div>

              <div className="f">
                <label htmlFor="p1">
                  Contraseña segura <em>*</em>
                </label>
                <input
                  id="p1"
                  type="password"
                  placeholder="••••••••••••"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <div className="f">
                <label htmlFor="p2">
                  Confirmar contraseña <em>*</em>
                </label>
                <input
                  id="p2"
                  type="password"
                  placeholder="••••••••••••"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="strength full-col" aria-live="polite">
                <div className="row">
                  <span>Nivel de cripto-seguridad</span>
                  <span id="lvl">Vacío</span>
                </div>
                <div className="bar2">
                  <span id="fill" />
                </div>
                <small>Mínimo 8 caracteres, alfanumérico con caracteres especiales.</small>
              </div>

              <fieldset
                className="f full-col"
                style={{ border: 0, padding: 0, minWidth: 0 }}
              >
                <legend
                  className="lbl"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  <span>Talla habitual de preferencia (pre-reserva)</span>
                  <span style={{ color: "var(--lime)" }}>[Cupo 1 unidad]</span>
                </legend>
                <div className="sizes-reg">
                  <input type="radio" name="talla" id="s1" value="S" />
                  <label htmlFor="s1">S</label>
                  <input type="radio" name="talla" id="s2" value="M" defaultChecked />
                  <label htmlFor="s2">M</label>
                  <input type="radio" name="talla" id="s3" value="L" />
                  <label htmlFor="s3">L</label>
                  <input type="radio" name="talla" id="s4" value="XL" />
                  <label htmlFor="s4">XL</label>
                  <input type="radio" name="talla" id="s5" value="XXL" />
                  <label htmlFor="s5">XXL</label>
                </div>
              </fieldset>

              <label
                className="check full-col"
                style={{ fontFamily: "var(--body)", fontSize: ".85rem" }}
              >
                <input type="checkbox" defaultChecked />
                <span>
                  Deseo recibir claves de acceso anticipado 15 minutos antes vía WhatsApp/SMS antes del
                  lanzamiento oficial.
                </span>
              </label>

              <label
                className="check full-col"
                style={{ fontFamily: "var(--body)", fontSize: ".85rem" }}
              >
                <input type="checkbox" required />
                <span>
                  Acepto los{" "}
                  <a href="#" style={{ textDecoration: "underline" }}>
                    Términos de Servicio
                  </a>{" "}
                  y la{" "}
                  <a href="#" style={{ textDecoration: "underline" }}>
                    Política de Privacidad
                  </a>{" "}
                  de KULT STUDIO Colombia.
                </span>
              </label>

              <button className="cta full-col" type="submit">
                Crear identificador de miembro
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M1 6h13M9 1l5 5-5 5" />
                </svg>
              </button>

              <div className="or full-col mono">O accede rápidamente con</div>

              <div className="social full-col">
                <button type="button">
                  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      fill="#fff"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </svg>
                  Google accreditation
                </button>
                <button type="button">
                  <svg width="16" height="18" viewBox="0 0 384 512" fill="#fff" aria-hidden="true">
                    <path
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                  Apple passport
                </button>
              </div>

              <p
                className="full-col mono"
                style={{
                  background: "var(--field)",
                  padding: "16px",
                  textAlign: "center",
                  color: "var(--muted)",
                }}
              >
                ¿Ya posees identificador de acceso?{" "}
                <a href="login.html" style={{ color: "var(--lime)", fontWeight: 700 }}>
                  [Iniciar sesión aquí]
                </a>
              </p>
            </form>
          </section>
        </div>
      </main>

      <footer className="auth-foot">
        <span>© 2026 KULT STUDIO Inc. Protocolo seguro // Bogotá, Colombia</span>
        <span className="ok">Edición limitada • Seguridad activa</span>
      </footer>
    </>
  );
}

export default MainRegistro;