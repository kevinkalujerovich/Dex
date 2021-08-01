//import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useFavorite } from "../contexts/FavoriteContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ItemList from "./ItemList";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
    marginBottom: 350,
  },
  titleMarca: {
    fontWeight: "bold",
  },
  titleMain: {
    display: "inline",
    fontWeight: "bold",
  },
  titleParrafo: {
    display: "inline",
    fontSize: "12px",
  },
  navLink: {
    fontSize: 13,
    color: "blue",
  },
  iconoCarrito: {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: 80,
  },
  titleMenu: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  marcaLista: {
    color: "gray",
  },
  boxFiltros: {
    marginBottom: 30,
  },
  formControl: {
    width: 180,
    marginBottom: 20,
  },
  filtroMensaje: {
    fontWeight: "bold",
  },
  btnEliminar: {
    marginBottom: 20,
    color: "red",
    fontWeight: "bold",
  },
  parrafoRedes: {
    marginTop: 20,
    color: "gray",
  },
  iconoInstagram: {
    color: " #3f729b",
    fontSize: 35,
  },
  iconoFacebook: {
    paddingTop: 0,
    color: "#3b5998",
    fontSize: 35,
  },
  iconoTwitter: {
    color: "#00acee",
    fontSize: 35,
  },
}));
export default function FavoriteCart() {
  const classes = useStyles();
  const favorite = useFavorite();
  const items = favorite.favorite;

  return (
    <Container className={classes.main}>
      {items.length > 0 ? (
        <>
          <Grid>
            <Typography variant="h5" className={classes.titleMain}>
              Favoritos{" "}
            </Typography>
            <Typography variant="subtitle1" className={classes.titleParrafo}>
              {items.length} Productos
            </Typography>
          </Grid>
          <Container maxWidth="md" className={classes.main}>
            <Grid container spacing={1}>
              <ItemList array={items} col={3} button={"eliminar"} />
            </Grid>
            <Grid container justifyContent="center">
              <Grid>
                <Typography
                  variant="subtitle2"
                  className={classes.parrafoRedes}
                >
                  Compartilo vía
                </Typography>
                <Link href="href=https://twitter.com/Dex-React">
                  <TwitterIcon className={classes.iconoTwitter} />
                </Link>
                <Link href="href=https://twitter.com/Dex-React">
                  <FacebookIcon className={classes.iconoFacebook} />
                </Link>
                <Link href="href=https://twitter.com/Dex-React">
                  <InstagramIcon className={classes.iconoInstagram} />
                </Link>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Grid>
            <Typography variant="h5" className={classes.titleMain}>
              Favoritos{" "}
            </Typography>
            <Typography variant="subtitle1" className={classes.titleParrafo}>
              {" "}
              0 Productos
            </Typography>

            <Typography variant="subtitle1" className={classes.textTelefono}>
              ¿Necesitás ayuda? 0810-888-3398
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <FavoriteIcon className={classes.iconoCarrito} />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="h4" gutterBottom>
              Favoritos esta vacio.
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="subtitle1">
              <NavLink to="/" className={classes.navLink}>
                Seguir Comprando
              </NavLink>
            </Typography>
          </Grid>
        </>
      )}
    </Container>
  );
}
