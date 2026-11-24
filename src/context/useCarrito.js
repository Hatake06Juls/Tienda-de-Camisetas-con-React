import { createContext, useContext } from "react";

export const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}