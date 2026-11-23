

function MostrarCategoria({categoria}){
return (
  <>
  <article>

    <h2>{categoria.nombre}</h2>
    <p>{categoria.descripcion}</p>

  </article>
  </>
);
}
export default MostrarCategoria;

