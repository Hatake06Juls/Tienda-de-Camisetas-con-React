import { useState } from "react";
import MainHome from "./componentes/home/MainHome";
import MainColeccion from "./componentes/coleccion/MainColeccion";
import MainContacto from "./componentes/contacto/MainContacto";
import HeaderLogin from "./componentes/login/HeaderLogin";
import MainLogin from "./componentes/login/MainLogin";
import MainRegistro from "./componentes/registro/MainRegistro";
import MainRecuperar from "./componentes/recuperar/MainRecuperar";

function App() {
  const [vista, setVista] = useState("home");

  return (
    <>
      {vista === "home" && <MainHome onNavegar={setVista} />}
      {vista === "coleccion" && <MainColeccion onNavegar={setVista} />}
      {vista === "contacto" && <MainContacto onNavegar={setVista} />}

      {(vista === "login" || vista === "registro" || vista === "recuperar") && (
        <>
          <HeaderLogin onNavegar={setVista} />
          {vista === "login" && <MainLogin onNavegar={setVista} />}
          {vista === "registro" && <MainRegistro onNavegar={setVista} />}
          {vista === "recuperar" && <MainRecuperar onNavegar={setVista} />}
        </>
      )}
    </>
  );
}

export default App;