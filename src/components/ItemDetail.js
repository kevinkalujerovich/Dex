import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  Container,
  CircularProgress,
} from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ItemList from "./ItemList";
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
    paddingTop: 10,
  },
  iconoFacebook: {
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
    fontSize: 15,
    fontWeight: "bold",
  },
  parrafoItem: {
    fontSize: 15,
  },
  mainDescription: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 500,
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
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={12} sm={6} container justifyContent="center">
          <img src={img} alt="imagen de producto" width="70%" heigth="70%" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className={classes.title}>{name}</h1>
          <p className={classes.parrafoItem}>Item No. {id}</p>
          <p className={classes.parrafoItem}>Stock {id}</p>
          <Typography variant="h4" gutterBottom className={classes.title}>
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
          <Box mt={6}>
            Compartilo vía
            <br />
            <a href="https://twitter.com/">
              <TwitterIcon className={classes.iconoTwitter} />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookIcon className={classes.iconoFacebook} />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon className={classes.iconoInstagram} />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Container className={classes.mainDescription}>
        <Grid>
          <p>
            <span className={classes.parrafo}>Descripción </span>
          </p>
          <p>{description}</p>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>
              <span className={classes.parrafo}>Género: </span> {genero}
            </p>
            <p>
              <span className={classes.parrafo}>Material: </span> {material}
            </p>
            <p>
              <span className={classes.parrafo}>Origen: </span> {origen}
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>
              <span className={classes.parrafo}>Garantía: </span> {garantia}
            </p>
            <p>
              <span className={classes.parrafo}>Importante: </span>
              {importante}
            </p>
            <p>
              <span className={classes.parrafo}>Marca: </span> {marca}
            </p>
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
