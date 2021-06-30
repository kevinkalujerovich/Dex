import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  btnAgregar: {
    color: "white",
    backgroundColor: "#e31724",
    "&:hover": {
      backgroundColor: "#e31724",
    },
    cantidad: {
      backgroundColor: "white",
      fontWeight: "bold",
    },
  },
});
export default function ItemCount({ initial, stock, funcion }) {
  const classes = useStyles();
  const [counter, setCounter] = useState(initial);

  const restarCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const sumarCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={3}>
        <Box>
          <Button variant="contained">-</Button>
          <span className={classes.cantidad}>{counter}</span>
          <Button variant="contained">+</Button>
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button onClick={() => restarCounter()}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={() => sumarCounter()}>+</Button>
          </ButtonGroup>
        </Box>
      </Grid>
      <Grid item sm={9}>
        <>
          <Button
            variant="contained"
            className={classes.btnAgregar}
            onClick={() => funcion(counter)}
          >
            Agregar al carrito
          </Button>
        </>
      </Grid>
    </Grid>
  );
}
