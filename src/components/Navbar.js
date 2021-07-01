import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import CartWidget from "./CartWidget";
import FavoriteCart from "./FavoriteCart";
import { Box, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  navbar: {
    backgroundColor: "black",
  },
  mensajeNav: {
    backgroundColor: "red",
  },
  mensajeNavTypography: {
    paddingTop: 5,
  },
  link: {
    fontWeight: "bold",
    color: "black",
  },
  navLink: {
    textDecoration: "none",
  },
  linkCategoria: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    "&:hover": {
      textDecoration: "none",
    },
  },
  navbarCategorias: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    borderBottomStyle: "solid",
  },
  iconosNav: {
    color: "white",
  },
}));

const categorias = [
  { link: "/category/Camisetas", text: "Camisetas" },
  { link: "/category/Botines", text: "Botines" },
  { link: "/category/Remeras", text: "Remeras" },
];

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <div>
        <AppBar position="static" className={classes.navbar}>
          <Grid container justify="center" className={classes.mensajeNav}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.mensajeNavTypography}
            >
              ¡Envíos a todo el país!
            </Typography>
          </Grid>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/">
                <img src={logo} alt="imagen de logo de tienda" width="150px" />
              </NavLink>
            </Typography>
            <NavLink to="/cart" className={classes.iconosNav}>
              <FavoriteCart />
            </NavLink>
            <NavLink to="/cart" className={classes.iconosNav}>
              <CartWidget />
            </NavLink>
          </Toolbar>
        </AppBar>
        <Box className={classes.navbarCategorias}>
          <Toolbar variant="dense">
            {categorias.map((x, index) => (
              <NavLink to={x.link} key={index} className={classes.navLink}>
                <Typography variant="h6">
                  <Link className={classes.linkCategoria}>{x.text}</Link>
                </Typography>
              </NavLink>
            ))}
          </Toolbar>
        </Box>
      </div>
    </>
  );
}
