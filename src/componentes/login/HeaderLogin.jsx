import { Link } from "react-router-dom";
import "./HeaderLogin.css";
import "./layout.css";
import "./auth.css";

function HeaderLogin() {
  return (
    <header className="bar">
      <Link className="brand" to="/">
        <span className="logo" aria-hidden="true">KULT</span>
        <span><b>KULT</b><small>Studio // Lab</small></span>
      </Link>
      <nav>
        <span className="cur mono">CUR: COP ($)</span>
        <Link className="back mono" to="/">[Volver a la tienda]</Link>
      </nav>
    </header>
  );
}

export default HeaderLogin;