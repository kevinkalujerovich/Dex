import {  useState } from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {Box,Grid} from '@material-ui/core';
import{NavLink} from "react-router-dom";

export default function ItemCount({initial,stock}) {
  const [counter, setCounter] = useState(initial);
  const [show, setShow] = useState(true);
  
  const restarCounter = () => {
    if(counter>1){
      setCounter(counter-1)
    }
  };
  const sumarCounter = () => {
    if(counter<stock){
      setCounter(counter+1)
    }
  };

const onAdd=()=>{
  setShow(false);
}


  return (
    <Grid container spacing={2} >
    <Grid item xs>
    <Box
  display="flex"
  justifyContent="center"
    >
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Button onClick={() => restarCounter()}>-</Button>
  <Button>{counter}</Button>
  <Button onClick={() => sumarCounter()}>+</Button>
</ButtonGroup>
</Box>
    </Grid>
    <Grid item xs>
      <>
      {show===true?
    <Button variant="contained" color="primary" onClick={() => {onAdd()
    }}>Agregar al carrito</Button>:<NavLink to="/cart"
    style={{ textDecoration: 'none',color:"white" }}><Button variant="contained" color="primary">Terminar mi compra</Button></NavLink>}
    </>
    </Grid>
    </Grid>
   
  );
}

