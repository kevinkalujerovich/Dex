import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Grid,
  Container,
  Button,
  Typography,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
    marginBottom: 350,
  },
  card: {
    marginBottom: 10,
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
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridAlingItems: {
    display: "flex",
    alignItems: "center",
  },
}));
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
            <Grid container spacing={1}>
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
                <Typography
                  variant="subtitle1"
                  className={classes.typographyNav}
                >
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
                      <Grid container spacing={3}>
                        <Grid
                          item
                          xs={4}
                          sm={2}
                          container
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              className={classes.img}
                              image={x.item.img}
                              title="Contemplative Reptile"
                            />
                          </CardContent>
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sm={6}
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCard}
                            >
                              {x.item.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              style={{ fontSize: "15px" }}
                            >
                              Item No.{x.item.id}
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={1}
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardDetalles}
                            >
                              Cantidad
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardCantidad}
                            >
                              {x.qy}
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={1}
                          container
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardDetalles}
                            >
                              Precio
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardCantidad}
                            >
                              ${x.item.precio}
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={1}
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardDetalles}
                            >
                              Subtotal
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              className={classes.titleCardCantidad}
                            >
                              ${x.item.precio * x.qy}
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          sm={1}
                          container
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent>
                            <label htmlFor="icon-button-file">
                              <IconButton
                                aria-label="upload picture"
                                component="span"
                                onClick={() => removeItemCart(x.item.id)}
                              >
                                <DeleteIcon className={classes.btnRemove} />
                              </IconButton>
                            </label>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  );
                })}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Grid
                  container
                  justifyContent="center"
                  className={classes.boxCompra}
                >
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
                      variant="subtitle1"
                      className={classes.titleCompraDetalle}
                    >
                      TOTAL
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <Typography
                      variant="subtitle1"
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
                <Grid container justifyContent="center">
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
          <Grid container justifyContent="center">
            <LocalMallIcon className={classes.iconoCarrito} />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="h4" gutterBottom>
              Tu carrito está vacío.
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="subtitle1">
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
