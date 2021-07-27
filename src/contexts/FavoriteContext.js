import { useState, createContext, useContext } from "react";

export const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addItem = (item) => {
    setFavorite([...favorite, item]);
  };
  console.log(favorite);
  return (
    <FavoriteContext.Provider value={{ favorite, addItem }}>
      {children}
    </FavoriteContext.Provider>
  );
};
