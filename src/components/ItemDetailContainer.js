import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Container, CircularProgress, Box, Grid } from "@material-ui/core";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const { Id } = useParams();

  useEffect(() => {
    if (Id != null) {
      const db = getFirestore();
      const itemsCollection = db.collection("productos");
      const highPrice = itemsCollection.where("id", "==", Id);
      highPrice.get().then((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
        setLoading(true);
      });
    }
  }, [Id]);
  return (
    <Container>
      <Grid container spacing={2}>
        {loading ? (
          items.map((item) => {
            return (
              <ItemDetail
                key={item.id}
                description={item.description}
                name={item.name}
                array={items[0]}
                img={item.img}
                precio={item.precio}
                id={item.id}
                genero={item.genero}
                material={item.material}
                origen={item.origen}
                garantia={item.garantia}
                marca={item.marca}
                importante={item.importante}
              ></ItemDetail>
            );
          })
        ) : (
          <Box mx="auto">
            <CircularProgress />
          </Box>
        )}
      </Grid>
    </Container>
  );
}
