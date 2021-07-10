import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles({
  btnAgregar: {
    color: "white",
    backgroundColor: "#e31724",
    "&:hover": {
      backgroundColor: "#e31724",
    },
    width: "100%",
  },
  cantidad: {
    marginLeft: 25,
    marginRight: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
  favoriteIcon: {
    color: "black",
    fontSize: 32,
  },
  btnGroup: {
    marginBottom: 10,
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
    <>
      <ButtonGroup
        size="large"
        color="default"
        aria-label="small outlined button group"
        className={classes.btnGroup}
      >
        <Button variant="contained" onClick={() => restarCounter()}>
          -
        </Button>
        <Button variant="contained">{counter}</Button>
        <Button variant="contained" onClick={() => sumarCounter()}>
          +
        </Button>
      </ButtonGroup>
      <Grid container spacing={1}>
        <Grid item sm={8}>
          <Button
            variant="contained"
            size="large"
            className={classes.btnAgregar}
            onClick={() => funcion(counter)}
          >
            Agregar al carrito
          </Button>
        </Grid>
        <Grid item sm={4}>
          <Button className={classes.favoriteFab}>
            <FavoriteBorderIcon className={classes.favoriteIcon} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
