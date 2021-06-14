import React from "react";
import { Typography, Grid, Box, Button, Container } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

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
}) {
  const cart = useCart();
  const [cant, setCant] = useState(false);
  const onAdd = (value) => {
    setCant(true);
    cart.addItem({ item: array, qy: value });
  };
  const styles = { fontWeight: "bold" };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} container justify="center">
        <Box mt={6}>
          <img src={img} alt="imagen de producto" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box mt={6}>
          <h1 className="titulo_size">{name}</h1>
          <p className="parrafo">Item No. {id}</p>
          <Typography variant="h4" gutterBottom style={styles}>
            ${precio}
          </Typography>
          <hr />
          <Box mt={6}>
            {cant ? (
              <NavLink
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
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
          <br />{" "}
          <a href="https://twitter.com/">
            <TwitterIcon style={{ color: "#00acee" }} />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon style={{ color: "#3b5998" }} />
          </a>
        </Box>
      </Grid>
      <Box mt={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justify="center">
            <p>
              <span className="parrafo_bold">Descripción</span>
            </p>
          </Grid>
          <Grid item xs={12} sm={8}>
            <p>{description}</p>
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
            </Grid>
          </Grid>
        </Grid>
        <Box mt={8}>
          <Container>
            <h2 className="titulo_size">Recomendados para vos</h2>
          </Container>
        </Box>
        ACA!
      </Box>
    </Grid>
  );
}
