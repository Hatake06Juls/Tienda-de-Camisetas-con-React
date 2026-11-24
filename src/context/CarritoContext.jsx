import { useState } from "react";
import { CarritoContext } from "./useCarrito";

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);
  const [abierto, setAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setItems((prev) => {
      const existe = prev.find((item) => item.nombre === producto.nombre);
      if (existe) {
        return prev.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setAbierto(true);
  };

  const quitarDelCarrito = (nombre) => {
    setItems((prev) => prev.filter((item) => item.nombre !== nombre));
  };

  const vaciarCarrito = () => setItems([]);

  const totalUnidades = items.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = items.reduce(
    (acc, item) => acc + (item.precioNum || 0) * item.cantidad,
    0
  );

  const cantidadFormateada = String(totalUnidades).padStart(2, "0");
  const totalFormateado = `$${totalPrecio.toLocaleString("es-CO")} COP`;

  return (
    <CarritoContext.Provider
      value={{
        items,
        abierto,
        setAbierto,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        cantidadFormateada,
        totalFormateado,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}