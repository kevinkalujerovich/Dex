import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { CircularProgress, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    if (catId != null) {
      const db = getFirestore();
      const itemsCollection = db.collection("productos");
      const highPrice = itemsCollection.where("category", "==", catId);
      highPrice.get().then((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
        setLoading(true);
      });
    } else {
      const db = getFirestore();
      const itemsCollection = db.collection("productos");
      itemsCollection.get().then((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
        setLoading(true);
      });
    }
  }, [catId]);

  return (
    <>
      {loading ? (
        <ItemList array={items} />
      ) : (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}
