import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {
  CircularProgress,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    marginTop: 50,
  },
});
export default function ItemListContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("productos");
    catId
      ? itemsCollection
          .where("category", "==", catId)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setLoading(true);
          })
      : itemsCollection
          .where("new", "==", true)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setLoading(true);
            setIndex(true);
          });
  }, [catId]);

  return (
    <Container className={classes.main}>
      {loading ? (
        <>
          {index ? (
            <>
              <Typography variant="h4" gutterBottom>
                Los más vendidos
              </Typography>
              <Grid container spacing={1}>
                <ItemList array={items} />
              </Grid>
            </>
          ) : (
            <Container>
              <Grid container spacing={1}>
                <ItemList array={items} />
              </Grid>
            </Container>
          )}
        </>
      ) : (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      )}
    </Container>
  );
}
