import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Grid,
  Container,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
const useStyles = makeStyles({
  main: {
    marginTop: 50,
    marginBottom: 350,
  },
  card: {
    marginBottom: 10,
    height: 100,
  },
  colorRed: {
    color: "red",
    fontSize: 13,
  },
  btnComprar: {
    color: "white",
    width: "100%",
    backgroundColor: "#e31724",
    "&:hover": {
      backgroundColor: "#e31724",
    },
  },
  navBtnComprar: {
    color: "white",
    textDecoration: "none",
    width: "100%",
  },
  titleMain: {
    display: "inline",
    fontWeight: "bold",
  },
  titleParrafo: {
    display: "inline",
    fontSize: "12px",
  },
  typographyNav: {
    marginBottom: 20,
  },
  navLink: {
    fontSize: 13,
    color: "blue",
  },
  titleCard: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  titleCardDetalles: {
    fontSize: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  titleCardCantidad: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
  },
  iconoCarrito: {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: 80,
  },
  titleCompra: {
    fontSize: 20,
  },
  titleCompraDetalle: {
    fontSize: 20,
  },
  boxCompra: {
    marginTop: 85,
  },
  textTelefono: {
    fontSize: 13,
    fontWeight: "bold",
  },
  btnRemove: {
    color: "black",
  },
  imgCard: {},
});
export default function Cart() {
  const classes = useStyles();
  const cart = useCart();

  const removeItemCart = (parametro) => {
    cart.removeItem(parametro);
  };
  const clearCart = () => {
    cart.clear();
  };

  return (
    <>
      {cart.cart.productos.length > 0 ? (
        <>
          <Container className={classes.main}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <Typography variant="h5" className={classes.titleMain}>
                  Mi Carrito{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.titleParrafo}
                >
                  {cart.cart.productos.reduce((total, n) => total + n.qy, 0) +
                    " "}
                  Productos
                </Typography>
                <Typography className={classes.typographyNav}>
                  <NavLink to="/" className={classes.navLink}>
                    Seguir Comprando
                  </NavLink>
                </Typography>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => clearCart()}
                >
                  Borrar productos
                </Button>
                {cart.cart.productos.map((x, i) => {
                  return (
                    <Card className={classes.card} key={i}>
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={2} container justify="center">
                            <img
                              className={classes.imgCard}
                              src={x.item.img}
                              width="80%"
                              height="80%"
                              alt="imagen de producto"
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Typography className={classes.titleCard}>
                              {x.item.name}
                            </Typography>
                            <Typography style={{ fontSize: "15px" }}>
                              Item No.{x.item.id}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={1}>
                            <Typography className={classes.titleCardDetalles}>
                              Cantidad
                            </Typography>
                            <Typography className={classes.titleCardCantidad}>
                              {x.qy}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={2}>
                            <Typography className={classes.titleCardDetalles}>
                              Precio
                            </Typography>
                            <Typography className={classes.titleCardCantidad}>
                              ${x.item.precio}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={2}>
                            <Typography className={classes.titleCardDetalles}>
                              Subtotal
                            </Typography>
                            <Typography className={classes.titleCardCantidad}>
                              ${x.item.precio * x.qy}
                            </Typography>
                          </Grid>
                          <Grid item xs={1} sm={1} container justify="center">
                            <label htmlFor="icon-button-file">
                              <IconButton
                                aria-label="upload picture"
                                component="span"
                                onClick={() => removeItemCart(x.item.id)}
                              >
                                <DeleteIcon className={classes.btnRemove} />
                              </IconButton>
                            </label>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid container justify="center" className={classes.boxCompra}>
                  <Typography
                    variant="subtitle2"
                    className={classes.titleCompra}
                  >
                    RESUMEN DE COMPRA
                  </Typography>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={8} sm={8}>
                    <Typography
                      variant="subtitule1"
                      className={classes.titleCompraDetalle}
                    >
                      TOTAL
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <Typography
                      variant="subtitule1"
                      className={classes.titleCompraDetalle}
                    >
                      $
                      {cart.cart.productos.reduce(
                        (total, n) => total + n.item.precio * n.qy,
                        0
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <NavLink to="/checkout" className={classes.navBtnComprar}>
                    <Button variant="contained" className={classes.btnComprar}>
                      Comprar
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <Container className={classes.main}>
          <Grid>
            <Typography variant="h5" className={classes.titleMain}>
              Mi Carrito{" "}
            </Typography>
            <Typography variant="subtitle1" className={classes.titleParrafo}>
              {" "}
              0 Productos
            </Typography>

            <Typography variant="subtitle1" className={classes.textTelefono}>
              ¿Necesitás ayuda? 0810-888-3398
            </Typography>
          </Grid>
          <Grid container justify="center">
            <LocalMallIcon className={classes.iconoCarrito} />
          </Grid>
          <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
              Tu carrito está vacío.
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>
              <NavLink to="/" className={classes.navLink}>
                Seguir Comprando
              </NavLink>
            </Typography>
          </Grid>
        </Container>
      )}
    </>
  );
}
