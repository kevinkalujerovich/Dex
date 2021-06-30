import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles({
  btnAgregar: {
    color: "white",
    backgroundColor: "#e31724",
    "&:hover": {
      backgroundColor: "#e31724",
    },
  },
  cantidad: {
    marginLeft: 25,
    marginRight: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
  iconoFavoritos: {
    color: "black",
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
    <Grid container spacing={1}>
      <Grid item sm={5}>
        <ButtonGroup color="default" aria-label="small outlined button group">
          <Button variant="contained" onClick={() => restarCounter()}>
            -
          </Button>
          <Button variant="contained">{counter}</Button>
          <Button variant="contained" onClick={() => sumarCounter()}>
            +
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item sm={4}>
        <Button
          variant="contained"
          className={classes.btnAgregar}
          onClick={() => funcion(counter)}
        >
          Agregar al carrito
        </Button>
      </Grid>
      <Grid item sm={3}>
        <Button>
          <FavoriteBorderIcon className={classes.iconoFavoritos} />
        </Button>
      </Grid>
    </Grid>
  );
}
