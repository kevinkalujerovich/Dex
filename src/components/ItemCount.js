import {  useState } from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';

export default function ItemCount({initial,stock}) {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");
  const [errorBis,setErrorBis]=useState("");

  const restarCounter = () => {
    return counter===1 ? (
    setError(`No puede ingresar una cantidad menor a 1`),
    setErrorBis(``)
    ):(
    setCounter(counter-1),
    setErrorBis(``)
    );
  };
  
  const sumarCounter = () => {
    return counter===stock?(
      setError(`No puede sumar mas unidades llego al limite de stock`),
      setErrorBis(``)
    ):(
      setCounter(counter+1),
      setErrorBis(``)
    );
  };

const onAdd=()=>{
setErrorBis(`Agrego al carrito ${counter} productos`);
setError(``);
}



  return (
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
  );
}