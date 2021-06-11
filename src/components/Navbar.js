import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CartWidget from "./CartWidget";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const categorias = [
  { link: "/category/Camisetas", text: "Camisetas" },
  { link: "/category/Botines", text: "Botines" },
  { link: "/category/Remeras", text: "Remeras" },
];

export default function Navbar() {
  const classes = useStyles();
  const cart = useCart();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              to="/"
              activeStyle={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Tienda
            </NavLink>
          </Typography>
          {categorias.map((x, index) => (
            <NavLink
              to={x.link}
              activeStyle={{
                fontWeight: "bold",
                color: "#3f50b5",
                textDecoration: "none",
                background: "white",
              }}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              key={index}
            >
              <Button color="inherit">{x.text}</Button>
            </NavLink>
          ))}
          {cart.cart.productos.length > 0 && (
            <NavLink to="/cart" style={{ color: "white" }}>
              <CartWidget />
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
