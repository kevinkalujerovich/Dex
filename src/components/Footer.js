import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    backgroundColor: "black",
    color: "#ffffffde",
    marginTop: 150,
  },
  secciones: {
    lineHeight: 0.5,
    color: "#ffffffde",
  },
  navLink: {
    color: "#ffffffde",
  },
  redes: {
    color: "#ffffffde",
    fontSize: 45,
  },
});
export default function IndexLinks() {
  const classes = useStyles();
  const footerBlockOne = [
    "Institucional",
    "Quiénes Somos",
    "Políticas de Privacidad",
    "Protocolos COVID-19",
    "Términos y Condiciones",
    "Defensa del Consumidor",
  ];
  const footerBlockTwo = [
    "Ayuda",
    "Preguntas Frecuentes",
    "Sucursales",
    "Pagos",
    "Entregas",
    "Cambios",
    "Nuevo Sitio",
  ];
  const footerBlockThree = [
    "Centro de Atención al Cliente",
    "0810-888-3398",
    "Lun a Vier de 9 a 20 / Sáb de 9 a 17",
    "Contacto",
    "Botón de Arrepentimiento",
    "11-5799-0114",
  ];

  return (
    <div className={classes.main}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              {footerBlockOne.map((x, i) =>
                i === 0 ? (
                  <p>{x}</p>
                ) : (
                  <NavLink to="/" className={classes.navLink}>
                    <p>{x}</p>
                  </NavLink>
                )
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              {footerBlockTwo.map((x, i) =>
                i === 0 ? (
                  <p>{x}</p>
                ) : (
                  <NavLink to="/" className={classes.navLink}>
                    <p>{x}</p>
                  </NavLink>
                )
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              {footerBlockThree.map((x, i) =>
                i < 3 ? (
                  <p>{x}</p>
                ) : (
                  <NavLink to="/" className={classes.navLink}>
                    <p>{x}</p>
                  </NavLink>
                )
              )}
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
            <a href="https://twitter.com/">
              <TwitterIcon className={classes.redes} />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookIcon className={classes.redes} />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon className={classes.redes} />
            </a>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="caption" display="block" gutterBottom>
              © Copyright - 2017 - 2021 www.ecommerce-react.com.ar, TODOS LOS
              DERECHOS RESERVADOS. Las fotos contenidas en este site, el
              logotipo y las marcas son propiedad de www.ecommerce-react.com.ar
              y/o de sus respectivos titulares. Está prohibida la reproducción
              total o parcial, sin la expresa autorización de la administradora
              de la tienda virtual. Dexter, empresa perteneciente al grupo DABRA
              S.A. con domicilio en Autopista Panamericana KM 25,6 - Don
              Torcuato de la Provincia de Buenos Aires – Argentina.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
