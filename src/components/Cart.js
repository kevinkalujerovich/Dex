import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Container, Button, Typography } from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFirestore } from "../firebase/firebase";
import FinalMessage from "../components/FinalMessage";
const useStyles = makeStyles({
  main: {
    marginTop: 50,
    marginBottom: 350,
  },
  card: {
    marginBottom: 10,
    height: 120,
  },
  colorRed: {
    color: "red",
    fontSize: 13,
  },
  colorButton: {
    color: "white",
    width: 300,
    backgroundColor: "#e31724",
    "&:hover": {
      backgroundColor: "#e31724",
    },
  },
  titleMain: {
    display: "inline",
  },
  titleParrafo: {
    display: "inline",
    fontSize: "12px",
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
  },
  parrafoTelefono: {
    float: "right",
  },
  titleCompra: {
    fontSize: 13,
    fontWeight: 500,
  },
  titleCompraDetalle: {
    fontSize: 20,
  },
  boxCompra: {
    marginTop: 85,
  },
});
export default function Cart() {
  const classes = useStyles();
  const cart = useCart();
  const [message, setmessage] = useState(false);
  const [orden, setorden] = useState("");

  const removeItemCart = (parametro) => {
    cart.removeItem(parametro);
  };
  const clearCart = () => {
    cart.clear();
  };

  const enviarOrder = () => {
    const db = getFirestore();
    const ordersCollections = db.collection("orders");
    const newOrder = {
      buyer: { name: "Usuario", phone: "111", email: "a@a.com" },
      items: cart.cart.productos,
      total: cart.cart.productos.reduce(
        (total, n) => total + n.item.precio * n.qy,
        0
      ),
    };
    ordersCollections.add(newOrder).then(({ id }) => {
      clearCart();
      setorden(id);
      setmessage(true);
    });
  };

  return (
    <>
      {message ? (
        <FinalMessage codigo={orden} />
      ) : (
        <>
          {cart.cart.productos.length > 0 ? (
            <>
              <Container className={classes.main}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <h2 className={classes.titleMain}>Mi Carrito </h2>
                    <p className={classes.titleParrafo}>
                      {cart.cart.productos.reduce(
                        (total, n) => total + n.qy,
                        0
                      ) + " "}
                      Productos
                    </p>
                    <p>
                      <NavLink to="/" className={classes.navLink}>
                        CONTINUAR COMPRANDO
                      </NavLink>
                    </p>
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
                              <Grid
                                item
                                xs={12}
                                sm={2}
                                container
                                justify="center"
                              >
                                <img
                                  src={x.item.img}
                                  width="65%"
                                  alt="imagen de producto"
                                />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                <p className={classes.titleCard}>
                                  {x.item.name}
                                </p>
                                <p style={{ fontSize: "15px" }}>
                                  Item No.{x.item.id}
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={1}>
                                <p className={classes.titleCardDetalles}>
                                  Cantidad
                                </p>
                                <p className={classes.titleCardCantidad}>
                                  {x.qy}
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={2}>
                                <p className={classes.titleCardDetalles}>
                                  Precio
                                </p>
                                <p className={classes.titleCardCantidad}>
                                  ${x.item.precio}
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={2}>
                                <p className={classes.titleCardDetalles}>
                                  Subtotal
                                </p>
                                <p className={classes.titleCardCantidad}>
                                  ${x.item.precio * x.qy}
                                </p>
                              </Grid>
                              <Grid
                                item
                                xs={1}
                                sm={1}
                                container
                                justify="center"
                              >
                                <Button
                                  size="small"
                                  onClick={() => removeItemCart(x.item.id)}
                                >
                                  <DeleteIcon />
                                </Button>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Grid
                      container
                      justify="center"
                      className={classes.boxCompra}
                    >
                      <p className={classes.titleCompra}>RESUMEN DE COMPRA</p>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={8} sm={8}>
                        <p className={classes.titleCompraDetalle}>TOTAL</p>
                      </Grid>
                      <Grid item xs={4} sm={4}>
                        <p className={classes.titleCompraDetalle}>
                          $
                          {cart.cart.productos.reduce(
                            (total, n) => total + n.item.precio * n.qy,
                            0
                          )}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid container justify="center">
                      <NavLink
                        to="/checkout"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          className={classes.colorButton}
                        >
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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <h2 className={classes.titleMain}>Mi Carrito </h2>
                  <p className={classes.titleParrafo}>0 Productos</p>
                  <p>
                    <NavLink to="/" className={classes.navLink}>
                      Seguir Comprando
                    </NavLink>
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p className={classes.parrafoTelefono}>
                    ¿Necesitás ayuda? 0810-888-3398
                  </p>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <LocalMallIcon className={classes.iconoCarrito} />
              </Grid>
              <Grid container justify="center">
                <Typography variant="h4" gutterBottom>
                  Tu carrito está vacío.
                </Typography>
              </Grid>
            </Container>
          )}
        </>
      )}
    </>
  );
}
