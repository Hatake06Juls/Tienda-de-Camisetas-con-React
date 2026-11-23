import { useState, useEffect } from "react";
import MostrarCategoria from "./MostrarCategoria";
import axios from "axios";

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categorias")
      .then((response) => {
        setCategorias(response.data);
        console.log(response.data)
      })
      .catch((error) => console.error("Error al conectar...", error));
  }, []);

  return (
    <section className="grid">
      {categorias.map((categoria) => (
        <MostrarCategoria
          key={categoria.id_categoria}
          categoria={categoria}
        />
      ))}
    </section>
  );
}

export default Categoria;