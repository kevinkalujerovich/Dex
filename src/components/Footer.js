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
    color: "white",
    marginTop: 200,
  },
  secciones: {
    lineHeight: 0.5,
    color: "white",
  },
  navLink: {
    color: "white",
  },
  redes: {
    color: "white",
    fontSize: 45,
  },
  titleSecciones: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
const footerBlockOne = [
  "Quiénes Somos",
  "Políticas de Privacidad",
  "Protocolos COVID-19",
  "Términos y Condiciones",
  "Defensa del Consumidor",
];
const footerBlockTwo = [
  "Preguntas Frecuentes",
  "Sucursales",
  "Pagos",
  "Entregas",
  "Cambios",
  "Nuevo Sitio",
];
const footerBlockThree = [
  "0810-888-3398",
  "Lun a Vier de 9 a 20 / Sáb de 9 a 17",
];
export default function IndexLinks() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              <p className={classes.titleSecciones}>Institucional</p>
              {footerBlockOne.map((x, i) => (
                <NavLink to="/" className={classes.navLink} key={i}>
                  <p>{x}</p>
                </NavLink>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              <p className={classes.titleSecciones}>Ayuda</p>
              {footerBlockTwo.map((x, i) => (
                <NavLink to="/" className={classes.navLink} key={i}>
                  <p>{x}</p>
                </NavLink>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.secciones}>
              <p className={classes.titleSecciones}>
                Centro de Atención al Cliente
              </p>
              {footerBlockThree.map((x, i) => (
                <p key={i}>{x}</p>
              ))}
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
              © Copyright - 2017 - 2021 www.dexter-react.com.ar, TODOS LOS
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
