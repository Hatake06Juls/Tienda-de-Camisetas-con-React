import Producto from "./Producto";

const camisetas = [
  { id: 1, nombre: "Kult camisa 1", precio: 89999, categoria: "Lanzamientos" },
  { id: 2, nombre: "Kult camisa 2", precio: 90000, categoria: "Moderna" },
  { id: 3, nombre: "Kult camisa 3", precio: 60999, categoria: "Graficas" },
  { id: 4, nombre: "Kult camisa 4", precio: 59999, categoria: "Oversized" },
];

function Catalogo({ onAgregar }) {
  return (
    <>
      <section className="grid">
        {camisetas.map((camiseta) => (
          <Producto
            key={camiseta.id}
            producto={camiseta}
            onAgregar={onAgregar}
          />
        ))}
      </section>
      /.grid
    </>
  );
}

export default Catalogo;