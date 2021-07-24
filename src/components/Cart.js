import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Typography,
  IconButton,
  CardMedia,
  Link,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#09ae85",
    "&:hover": {
      backgroundColor: "#09ae85",
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
  titleTotal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  titlePrecioTotal: {
    fontSize: 25,
    fontWeight: "bold",
    float: "right",
  },
  titlePrecioSubtotal: {
    float: "right",
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
    paddingTop: 0,
  },
  contentCartDetalle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  precioDetalle: {
    float: "right",
  },
  subtotalDetalle: {
    paddingBottom: 0,
  },
  input: {
    width: "100%",
    marginTop: 25,
  },
  title: {
    fontWeight: "bold",
  },
  acordion: {
    width: "100%",
  },
  acordionDetails: {
    paddingBottom: 0,
  },
  titleAcordion: {
    fontSize: 12,
  },
  titleDescuentoSubtotal: {
    color: "red",
    float: "right",
    fontWeight: "bold",
  },
  titleDescuento: {
    color: "red",
    fontWeight: "bold",
  },
  errorDescuento: {
    width: "100%",
    textAlign: "center",
  },
}));
export default function Cart() {
  const classes = useStyles();
  const cart = useCart();
  const [codigo, setCodigo] = useState("");
  const [descuento, setDescuento] = useState(null);
  const total = cart.cart.productos.reduce(
    (total, n) => total + n.item.precio * n.qy,
    0
  );
  const descuentoTotal = (total * 10) / 100;
  const removeItemCart = (parametro, descuento) => {
    cart.removeItem(parametro, descuento);
  };
  const clearCart = () => {
    cart.clear();
  };
  const valorDescuento = (valor) => {
    cart.valorDescuento(valor);
  };
  const onChange = (e) => {
    setCodigo(e.target.value);
  };
  const validar = () => {
    if (codigo !== "descuento") {
      setDescuento(false);
    } else {
      setDescuento(true);
      valorDescuento(true);
    }
  };
  return (
    <>
      {cart.cart.productos.length > 0 ? (
        <>
          <Container className={classes.main}>
            <Grid container spacing={3}>
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
                          <CardContent
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                          >
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
                          <CardContent className={classes.contentCartDetalle}>
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
                          container
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent className={classes.contentCartDetalle}>
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
                          <CardContent className={classes.contentCartDetalle}>
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
                          container
                          justifyContent="center"
                          className={classes.gridAlingItems}
                        >
                          <CardContent className={classes.contentCartDetalle}>
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
                          <CardContent className={classes.contentCartDetalle}>
                            <label htmlFor="icon-button-file">
                              <IconButton
                                aria-label="upload picture"
                                component="span"
                                onClick={() =>
                                  removeItemCart(x.item.id, cart.cart.descuento)
                                }
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
                <Card className={classes.root}>
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Typography className={classes.title} gutterBottom>
                        RESUMEN DE COMPRA
                      </Typography>
                    </Grid>
                    <br />

                    {cart.cart.descuento === false && (
                      <>
                        <Grid container justifyContent="center">
                          <Accordion className={classes.acordion}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              style={{ backgroundColor: "#e1e1e1" }}
                            >
                              <Typography
                                variant="subtitle1"
                                className={classes.titleAcordion}
                              >
                                ¿Tenés un código de descuento?
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              className={classes.acordionDetails}
                            >
                              <TextField
                                className={classes.input}
                                label="Codigo de descuento"
                                onChange={onChange}
                                variant="outlined"
                                size="small"
                              />
                            </AccordionDetails>
                            {descuento === false && (
                              <AccordionDetails>
                                <Alert
                                  severity="error"
                                  size="small"
                                  className={classes.errorDescuento}
                                >
                                  Codigo incorrecto
                                </Alert>
                              </AccordionDetails>
                            )}
                            <AccordionDetails>
                              <Button>
                                <Link
                                  className={classes.titleAcordion}
                                  style={{ textDecoration: "none" }}
                                  onClick={validar}
                                >
                                  APLICAR {">"}
                                </Link>
                              </Button>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                        <br />
                      </>
                    )}
                    <Grid container spacing={1}>
                      <Grid item xs={8} sm={6}>
                        <Typography variant="body2" component="p">
                          Subtotal
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={6}>
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.titlePrecioSubtotal}
                        >
                          ${total}
                        </Typography>
                      </Grid>
                    </Grid>
                    {cart.cart.descuento && (
                      <Grid container spacing={1}>
                        <Grid item xs={8} sm={6}>
                          <Typography
                            variant="body2"
                            component="p"
                            className={classes.titleDescuento}
                          >
                            Descuento %10
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sm={6}>
                          <Typography
                            variant="body2"
                            component="p"
                            className={classes.titleDescuentoSubtotal}
                          >
                            {descuentoTotal.toFixed(2)}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                    <Grid container spacing={1}>
                      <Grid item xs={8} sm={6}>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          className={classes.titleTotal}
                        >
                          TOTAL
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={6}>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          className={classes.titlePrecioTotal}
                        >
                          $
                          {cart.cart.descuento
                            ? (total - descuentoTotal).toFixed(2)
                            : total}
                        </Typography>
                      </Grid>
                    </Grid>
                    <NavLink to="/checkout" className={classes.navBtnComprar}>
                      <Button
                        variant="contained"
                        className={classes.btnComprar}
                      >
                        INICIAR PAGO {">"}
                      </Button>
                    </NavLink>
                  </CardContent>
                </Card>
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
