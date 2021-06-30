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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={img} alt="imagen de producto" width="80%" heigth="80%" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={6}>
            <h1 className="titulo_size">{name}</h1>
            <p className="parrafo_size-12">Item No. {id}</p>
            <Typography variant="h4" gutterBottom>
              ${precio}
            </Typography>
            <Box mt={6}>
              {cant ? (
                <NavLink to="/cart" className={classes.NavLink}>
                  <Button variant="contained" color="primary">
                    Terminar mi compra
                  </Button>
                </NavLink>
              ) : (
                <ItemCount stock={10} initial={1} funcion={onAdd} />
              )}
            </Box>
          </Box>
          <Box className="div_line_height" mt={12}>
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
      <Container className="div_mt">
        <Grid>
          <p>
            <span className="parrafo_bold">Descripción </span>
          </p>
          <p>{description}</p>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>
              <span className="parrafo_bold">Género: </span> {genero}
            </p>
            <p>
              <span className="parrafo_bold">Material: </span> {material}
            </p>
            <p>
              <span className="parrafo_bold">Origen: </span> {origen}
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>
              <span className="parrafo_bold">Garantía: </span> {garantia}
            </p>
            <p>
              <span className="parrafo_bold">Importante: </span>
              {importante}
            </p>
            <p>
              <span className="parrafo_bold">Marca: </span> {marca}
            </p>
          </Grid>
          <Grid container spacing={3} className="div_mt ">
            <Container>
              <h2 className="titulo_size">Recomendados para vos</h2>
            </Container>
            {loading ? (
              <Grid container justify="center">
                <CircularProgress />
              </Grid>
            ) : (
              <ItemList array={items} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
