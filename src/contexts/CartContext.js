import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ productos: [] });

  const addItem = (item) => {
    setCart({ productos: [...cart.productos, item] });
  };
  console.log(cart.productos[0].item.id);
  const clear = () => {
    setCart({ productos: [] });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
