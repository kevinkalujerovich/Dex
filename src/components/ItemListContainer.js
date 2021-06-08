import React, { useState, useEffect } from "react";
import data from "../data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { useCart } from "../contexts/CartContext";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();

  const cart = useCart();

  console.log(cart);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setLoader(true);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    catId
      ? getItems.then((res) => {
          setItems(res.filter((i) => i.category === catId));
          setLoader(false);
        })
      : getItems.then((res) => {
          setItems(res);

          setLoader(false);
        });
  }, [catId]);

  return <ItemList array={items} load={loader} />;
}
