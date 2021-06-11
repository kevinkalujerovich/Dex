import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ productos: [] });

  const addItem = (item) => {
    if (cart.productos.some((x) => x.item.name === item.item.name)) {
      return;
    }
    setCart({ productos: [...cart.productos, item] });
  };

  const clear = () => {
    setCart({ productos: [] });
  };

  const removeItem = (itemId) => {
    setCart({
      productos: cart.productos.filter((x) => x.item.id !== itemId),
    });
  };
  console.log(cart.productos);
  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
