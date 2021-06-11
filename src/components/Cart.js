import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DeleteIcon from "@material-ui/icons/Delete";
export default function Cart() {
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
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2 style={{ display: "inline" }}>Mi Carrito </h2>
              <p style={{ display: "inline", fontSize: "12px" }}>
                {cart.cart.productos.length} Productos
              </p>
              <p style={{ fontSize: "12px" }}>
                <NavLink to="/" style={{ color: "blue" }}>
                  Seguir Comprando
                </NavLink>
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ float: "right" }}>¿Necesitás ayuda? 0810-888-3398</p>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              {cart.cart.productos.map((x, i) => {
                return (
                  <Grid container spacing={3} key={i}>
                    <Grid item xs={12} sm={2}>
                      <img
                        src={x.item.img}
                        width="60"
                        height="60"
                        alt="imagen de producto"
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {x.item.name}
                      </p>
                      <p style={{ fontSize: "15px" }}>Item No.:{x.item.id}</p>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => removeItemCart({x.item.id})}
                      >
                        Remover item
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <p style={{ fontSize: "12px" }}>Cantidad</p>
                      <p>{x.qy}</p>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                        }}
                      >
                        Precio
                      </p>
                      <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                        ${x.item.precio}
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <DeleteIcon />
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                Total $
                {cart.cart.productos.reduce(
                  (total, n) => total + n.item.precio * n.qy,
                  0
                )}
              </div>
            </Grid>
          </Grid>
          <>
            <Button variant="contained" color="secondary" onClick={clearCart}>
              Borrar productos
            </Button>
          </>
        </Container>
      ) : (
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2 style={{ display: "inline" }}>Mi Carrito </h2>
              <p style={{ display: "inline", fontSize: "12px" }}>0 Productos</p>
              <p style={{ fontSize: "12px" }}>
                <NavLink to="/" style={{ color: "blue" }}>
                  Seguir Comprando
                </NavLink>
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ float: "right" }}>¿Necesitás ayuda? 0810-888-3398</p>
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
  );
}
