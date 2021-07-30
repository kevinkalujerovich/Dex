//import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useFavorite } from "../contexts/FavoriteContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ItemList from "./ItemList";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
    marginBottom: 350,
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
}));
export default function FavoriteCart() {
  const classes = useStyles();
  const favorite = useFavorite();
  const items = favorite.favorite;
  return (
    <Container className={classes.main}>
      {items.length > 0 ? (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
            asd
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={1}>
              <ItemList array={items} col={3} button={"eliminar"} />
            </Grid>
          </Grid>
        </Grid>
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
