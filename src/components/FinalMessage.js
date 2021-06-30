import React from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#fb547c",
  },
  codigoOrden: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default function FinalMessage({ codigo }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Typography variant="h5" gutterBottom className={classes.textTitle}>
            ¡Gracias por su compra!
          </Typography>
        </Grid>
        <Grid container justify="center">
          <p>
            Enviamos tu factura y datos de la compra a example@gmail.com, tu
            orden de compra es:
          </p>
          <p className={classes.codigoOrden}>{codigo}</p>
        </Grid>
        <Grid container justify="center">
          <Button variant="outlined">SEGUIR COMPRANDO</Button>
        </Grid>
      </Container>
    </>
  );
}
