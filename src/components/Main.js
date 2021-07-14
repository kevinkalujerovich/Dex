import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Container, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import footer_img from "../img/footer_img.png";
import footer_img_2 from "../img/footer_img_2.png";
import header_promocion from "../img/header_promocion.png";
import header_promocion_2 from "../img/header_promocion_2.png";
import header_promocion_3 from "../img/header_promocion_3.png";
import { makeStyles } from "@material-ui/core/styles";
import Carrusel from "./Carrusel";
const useStyles = makeStyles({
  main: {
    marginTop: 50,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
export default function Main() {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <Carrusel />
      <Grid
        spacing={1}
        className={classes.main}
        container
        justifyContent="center"
      >
        <Grid item xs={12} sm={4}>
          <NavLink to="/item/16">
            <img
              src={header_promocion}
              alt="imagen de ropa"
              className={classes.img}
            />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <NavLink to="/item/17">
            <img
              src={header_promocion_2}
              alt="imagen de ropa"
              className={classes.img}
            />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <NavLink to="item/18">
            <img
              src={header_promocion_3}
              alt="imagen de ropa"
              className={classes.img}
            />
          </NavLink>
        </Grid>
      </Grid>
      <ItemListContainer />
      <Grid
        container
        spacing={10}
        className={classes.main}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <NavLink to="/item/19">
            <img
              src={footer_img}
              alt="imagen de ropa"
              className={classes.img}
            />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6} container>
          <NavLink to="/item/20">
            <img
              src={footer_img_2}
              alt="imagen de ropa"
              className={classes.img}
            />
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}
