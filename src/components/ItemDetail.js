import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  CircularProgress,
  Link,
} from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ItemList from "./ItemList";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { getFirestore } from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  NavLink: {
    textDecoration: "none",
    color: "white",
  },
  iconoInstagram: {
    color: " #3f729b",
    fontSize: 35,
  },
  iconoFacebook: {
    paddingTop: 0,
    color: "#3b5998",
    fontSize: 35,
  },
  iconoTwitter: {
    color: "#00acee",
    fontSize: 35,
  },
  main: {
    marginTop: 10,
  },
  parrafo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  parrafoDetalle: {
    marginTop: 20,
    marginBottom: 20,
  },
  parrafoItem: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  mainDescription: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  parrafoRedes: {
    marginTop: 20,
    color: "gray",
  },
});

export default function ItemDetail({
  img,
  description,
  name,
  precio,
  array,
  id,
  genero,
  material,
  origen,
  marca,
  importante,
  garantia,
  category,
}) {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const db = getFirestore();
    const itemsCollection = db.collection("productos");
    itemsCollection
      .where("category", "==", category)
      .get()
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => doc.data()).filter((x) => x.id !== id)
        );
        setLoading(false);
      });
  }, [category, id]);

  const cart = useCart();
  const [cant, setCant] = useState(false);
  const onAdd = (value) => {
    setCant(true);
    cart.addItem({ item: array, qy: value });
  };

  return (
    <>
      <Container className={classes.mainDescription}>
        <Grid container spacing={3} className={classes.main}>
          <Grid item xs={12} sm={6} container justifyContent="center">
            <img src={img} alt="imagen de producto" width="70%" heigth="70%" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" className={classes.title}>
              {name}
            </Typography>
            <Typography variant="subtitle1" className={classes.parrafoItem}>
              Item No. {id}
            </Typography>
            <Typography variant="subtitle2" className={classes.parrafoItem}>
              Stock {id}
            </Typography>
            <Typography variant="h1" gutterBottom className={classes.title}>
              ${precio}
            </Typography>
            {cant ? (
              <NavLink to="/cart" className={classes.NavLink}>
                <Button variant="contained" color="primary">
                  Ver carrito
                </Button>
              </NavLink>
            ) : (
              <ItemCount stock={10} initial={1} funcion={onAdd} />
            )}
            <Grid>
              <Typography variant="subtitle2" className={classes.parrafoRedes}>
                Compartilo vía
              </Typography>
              <Link href="href=https://twitter.com/Dex-React">
                <TwitterIcon className={classes.iconoTwitter} />
              </Link>
              <Link href="href=https://twitter.com/Dex-React">
                <FacebookIcon className={classes.iconoFacebook} />
              </Link>
              <Link href="href=https://twitter.com/Dex-React">
                <InstagramIcon className={classes.iconoInstagram} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.mainDescription}>
        <Grid>
          <Typography varian="subtitle1">
            <span className={classes.parrafo}>Descripción:</span>
          </Typography>
          <Typography varian="subtitle1">{description}</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Género: </span> {genero}
            </Typography>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Material: </span> {material}
            </Typography>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Origen: </span> {origen}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Garantía: </span> {garantia}
            </Typography>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Importante: </span>
              {importante}
            </Typography>
            <Typography varian="subtitle1" className={classes.parrafoDetalle}>
              <span className={classes.parrafo}>Marca: </span> {marca}
            </Typography>
          </Grid>
          <Grid container spacing={1} className={classes.mainDescription}>
            <Container>
              <h2 className={classes.title}>Recomendados para vos</h2>
            </Container>
            {loading ? (
              <Grid container justifyContent="center">
                <CircularProgress />
              </Grid>
            ) : (
              <Grid container spacing={1}>
                <ItemList array={items} col={3} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
