import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Container, CircularProgress, Box, Grid } from "@material-ui/core";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    marginTop: 40,
  },
});
export default function ItemDetailContainer() {
  const classes = useStyles();
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { Id } = useParams();

  useEffect(() => {
    if (Id) {
      const db = getFirestore();
      const itemsCollection = db.collection("productos");
      const highPrice = itemsCollection.where("id", "==", Id);
      highPrice.get().then((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
        setLoading(false);
      });
    }
  }, [Id]);
  return (
    <Container className={classes.main}>
      <Grid container spacing={2}>
        {loading ? (
          <Box mx="auto">
            <CircularProgress />
          </Box>
        ) : (
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
                category={item.category}
              ></ItemDetail>
            );
          })
        )}
      </Grid>
    </Container>
  );
}
