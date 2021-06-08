import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ productos: [] });

  const addItem = (item) => {
    setCart({ ...cart, productos: [...cart.productos, item] });
  };

  const clear = () => {
    setCart({});
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
