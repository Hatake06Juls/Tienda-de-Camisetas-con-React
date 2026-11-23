import "/src/App.css"

function Producto({producto, onAgregar}){
return (
  <>
  <article className="card">
    <img src={producto.imagen}
    alt={producto.nombre} />
    <span className="bagge">{producto.categoria}</span>
    <h2>{producto.nombre}</h2>
    <p>{producto.talla}</p>
    <p>Precio: $ {producto.precio.toLocaleString("es-CO")} COP</p>
    <span className="stock">{producto.stock > 0 ? "Diponible" : "Agotado"}</span>
    <button type="button" onClick={()=>onAgregar(producto)}>Agregar Camisa</button>
  </article>/.card

  </>
);
}
export default Producto;