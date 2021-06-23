import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Container, Grid } from "@material-ui/core";
import imagen_principal from "../img/imagen_principal.png";
import { NavLink } from "react-router-dom";
import footer_img from "../img/footer_img.png";
import footer_img_2 from "../img/footer_img_2.png";
import header_promocion from "../img/header_promocion.png";
import header_promocion_2 from "../img/header_promocion_2.png";
import header_promocion_3 from "../img/header_promocion_3.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    marginTop: 100,
  },
});
export default function Main() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <img src={imagen_principal} width="100%" alt="imagen de publicidad" />
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12} sm={4} container justify="center">
          <NavLink to="/">
            <img src={header_promocion} alt="imagen de ropa" width="100%" />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={4} container justify="center">
          <NavLink to="/">
            <img src={header_promocion_2} alt="imagen de ropa" width="100%" />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={4} container justify="center">
          <NavLink to="/">
            <img src={header_promocion_3} alt="imagen de ropa" width="100%" />
          </NavLink>
        </Grid>
      </Grid>
      <ItemListContainer />
      <Grid container spacing={5} className={classes.main}>
        <Grid item xs={12} sm={6} container justify="center">
          <NavLink to="/">
            <img src={footer_img} alt="imagen de ropa" width="100%" />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6} container justify="center">
          <NavLink to="/">
            <img src={footer_img_2} alt="imagen de ropa" width="100%" />
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}
