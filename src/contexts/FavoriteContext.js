import { useState, createContext, useContext } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addItem = (item) => {
    if (favorite.some((x) => x.item.name === item.item.name)) {
      return;
    } else {
      setFavorite([...favorite, item]);
    }
  };

  const clear = () => {
    setFavorite([]);
  };

  console.log(favorite);
  return (
    <FavoriteContext.Provider value={{ favorite, addItem, clear }}>
      {children}
    </FavoriteContext.Provider>
  );
};
