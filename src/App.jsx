import { Routes, Route, Navigate } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import DrawerCarrito from "./componentes/DrawerCarrito";
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
    <CarritoProvider>
      <DrawerCarrito />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/coleccion" element={<MainColeccion />} />
        <Route path="/contacto" element={<MainContacto />} />

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CarritoProvider>
  );
}

export default App;