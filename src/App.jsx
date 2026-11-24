import { Routes, Route, Navigate } from "react-router-dom";
import MainHome from "./componentes/home/MainHome";
import MainColeccion from "./componentes/coleccion/MainColeccion";
import MainContacto from "./componentes/contacto/MainContacto";
import HeaderLogin from "./componentes/login/HeaderLogin";
import MainLogin from "./componentes/login/MainLogin";
import MainRegistro from "./componentes/registro/MainRegistro";
import MainRecuperar from "./componentes/recuperar/MainRecuperar";

function LayoutAuth({ children }) {
  return (
    <>
      <HeaderLogin />
      {children}
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Rutas principales de la tienda */}
      <Route path="/" element={<MainHome />} />
      <Route path="/coleccion" element={<MainColeccion />} />
      <Route path="/contacto" element={<MainContacto />} />

      {/* Rutas de autenticación */}
      <Route
        path="/login"
        element={
          <LayoutAuth>
            <MainLogin />
          </LayoutAuth>
        }
      />
      <Route
        path="/registro"
        element={
          <LayoutAuth>
            <MainRegistro />
          </LayoutAuth>
        }
      />
      <Route
        path="/recuperar"
        element={
          <LayoutAuth>
            <MainRecuperar />
          </LayoutAuth>
        }
      />

      {/* Ruta comodín por si escriben una URL que no existe */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;