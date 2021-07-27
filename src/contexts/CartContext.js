import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ productos: [], descuento: false });

  const addItem = (item, valorDescuento) => {
    if (cart.productos.some((x) => x.item.name === item.item.name)) {
      cart.productos.map((x) => {
        if (x.item.name === item.item.name) {
          return (x.qy += item.qy);
        }
        return x.qy;
      });
    } else {
      setCart({
        productos: [...cart.productos, item],
        descuento: valorDescuento,
      });
    }
  };

  const valorDescuento = (valor) => {
    setCart({ productos: [...cart.productos], descuento: valor });
  };

  const clear = () => {
    setCart({ productos: [], descuento: false });
  };

  const removeItem = (itemId, descuento) => {
    setCart({
      productos: cart.productos.filter((x) => x.item.id !== itemId),
      descuento: descuento,
    });
  };
  console.log(cart.productos);
  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, valorDescuento }}
    >
      {children}
    </CartContext.Provider>
  );
};
