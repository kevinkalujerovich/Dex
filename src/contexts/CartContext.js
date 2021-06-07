import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ addedItems: [], totalPrice: 0 });

  const addItem = (item) => {
    setCart({ ...cart, addedItems: [...cart.addedItems, item] });
  };

  const clear = () => {};

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
