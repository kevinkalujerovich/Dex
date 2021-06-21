import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Container, Button } from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFirestore } from "../firebase/firebase";
import FinalMessage from "../components/FinalMessage";
const useStyles = makeStyles({
  card: {
    marginBottom: 10,
    height: 110,
  },
  colorRed: {
    color: "red",
    fontSize: 13,
  },
  colorButton: {
    color: "white",
    backgroundColor: "#09ae85",
  },
  cardDetalle: {
    paddingTop: 40,
    borderColor: "black",
    marginBottom: 300,
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
              <Container>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={9}>
                    <h2 style={{ display: "inline" }}>Mi Carrito </h2>
                    <p style={{ display: "inline", fontSize: "12px" }}>
                      {cart.cart.productos.reduce(
                        (total, n) => total + n.qy,
                        0
                      ) + " "}
                      Productos
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      <NavLink to="/" style={{ color: "blue" }}>
                        Seguir Comprandoooo
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
                              <Grid item xs={12} sm={5}>
                                <p
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {x.item.name}
                                </p>
                                <p style={{ fontSize: "15px" }}>
                                  Item No.:{x.item.id}
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={2}>
                                <p
                                  style={{
                                    fontSize: "15px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  Cantidad
                                </p>
                                <p
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "15px",
                                  }}
                                >
                                  {x.qy}
                                </p>
                              </Grid>
                              <Grid item xs={12} sm={2}>
                                <p
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "15px",
                                  }}
                                >
                                  Precio
                                </p>
                                <p
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  ${x.item.precio}
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
                    <p style={{ fontWeight: "bold" }}>
                      ¿Necesitás ayuda? 0810-888-3398
                    </p>
                    <Grid item xs={12} sm={12}>
                      <div className={classes.cardDetalle}>
                        <p>RESUMEN DE COMPRA</p>
                        <Grid container spacing={1}>
                          <Grid item xs={8} sm={8}>
                            <p>TOTAL</p>
                          </Grid>
                          <Grid item xs={4} sm={4}>
                            <p>
                              $
                              {cart.cart.productos.reduce(
                                (total, n) => total + n.item.precio * n.qy,
                                0
                              )}
                            </p>
                          </Grid>
                        </Grid>

                        <p className={classes.colorRed}>
                          COMPRA EXPRESS: Aplica únicamente si todos los
                          productos del carrito pertenecen a dicha categoría.
                        </p>
                        <Button
                          variant="contained"
                          className={classes.colorButton}
                          onClick={() => enviarOrder()}
                        >
                          FINALIZAR PAGO {">"}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </>
          ) : (
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <h2 style={{ display: "inline" }}>Mi Carrito </h2>
                  <p style={{ display: "inline", fontSize: "12px" }}>
                    0 Productos
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <NavLink to="/" style={{ color: "blue" }}>
                      Seguir Comprando
                    </NavLink>
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p style={{ float: "right" }}>
                    ¿Necesitás ayuda? 0810-888-3398
                  </p>
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalMallIcon style={{ fontSize: "40px" }} />
              </div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Tu carrito está vacío.
              </h2>
            </Container>
          )}
        </>
      )}
    </>
  );
}
