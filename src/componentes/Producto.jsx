function Producto({
  imagen,
  alt,
  badge,
  badgeClass,
  gsm,
  sku,
  fit,
  nombre,
  precioTexto,
  precioNum,
  tallasDisp,
  tallasData,
  colorData,
  onAgregar,
}) {
  return (
    <article className="prod" data-tallas={tallasData} data-color={colorData}>
      <div className="img">
        <div className="badges mono">
          {badge && <span className={badgeClass || undefined}>{badge}</span>}
          {gsm && <span>{gsm}</span>}
        </div>
        <img src={imagen} alt={alt} loading="lazy" />
      </div>

      <div className="info">
        <div className="sku mono">
          <span>{sku}</span>
          <b>{fit}</b>
        </div>
        <h3>{nombre}</h3>
        <div className="pr">
          <strong>{precioTexto}</strong>
          {tallasDisp && <span>{tallasDisp}</span>}
        </div>

        {onAgregar && (
          <button
            type="button"
            className="btn-comprar btn lime"
            style={{ marginTop: "10px", width: "100%" }}
            onClick={() => onAgregar({ nombre, precioNum })}
          >
            Agregar al carrito <span>+</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default Producto;