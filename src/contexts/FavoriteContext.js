import { useState, createContext, useContext } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addItem = (item) => {
    if (favorite.some((x) => x.name === item.name)) {
      return;
    } else {
      setFavorite([...favorite, item]);
    }
  };

  const clear = () => {
    setFavorite([]);
  };
  const removeItem = (itemId) => {
    setFavorite(favorite.filter((x) => x.id !== itemId));
  };
  return (
    <FavoriteContext.Provider value={{ favorite, addItem, clear, removeItem }}>
      {children}
    </FavoriteContext.Provider>
  );
};
