import React from "react";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ItemDetail({ img, description, name, precio, array }) {
  const cart = useCart();
  const [cant, setCant] = useState(false);
  const onAdd = (value) => {
    setCant(true);
    cart.addItem({ item: array, qy: value });
  };
  const prueba = () => {
    cart.clear();
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Box mt={6}>
          <img src={img} alt="imagen de producto" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box mt={6}>
          <Button onClick={prueba}>asdasdasd</Button>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            ${precio}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
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
      </Grid>
    </Grid>
  );
}
