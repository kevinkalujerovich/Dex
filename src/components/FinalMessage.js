import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#fb547c",
  },
  main: {
    marginTop: 50,
    textAlign: "center",
  },
  codigoOrden: {
    fontWeight: "bold",
    fontSize: 18,
  },
  btn: {
    marginTop: 50,
  },
});
export default function FinalMessage({ id }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" className={classes.main}>
        <Typography variant="h4" gutterBottom>
          ¡Gracias por su compra!
        </Typography>
        <Typography variant="subtitule1" gutterBottom>
          Enviamos tu factura y datos de la compra a example@gmail.com, tu orden
          de compra es:<span className={classes.codigoOrden}>{"  " + id}</span>
        </Typography>
        <Typography className={classes.btn}>
          <Button variant="outlined" size="small">
            SEGUIR COMPRANDO
          </Button>
        </Typography>
      </Container>
    </>
  );
}
