import "./HeaderLogin.css";
import "./layout.css";
import "./auth.css";

function HeaderLogin() {
  return (
    <header className="bar">
      <a className="brand" href="#">
        <span className="logo" aria-hidden="true">KULT</span>
        <span><b>KULT</b><small>Studio // Lab</small></span>
      </a>
      <nav>
        <span className="cur mono">CUR: COP ($)</span>
        <a className="back mono" href="index.html">[Volver a la tienda]</a>
      </nav>
    </header>
  );
}

export default HeaderLogin;