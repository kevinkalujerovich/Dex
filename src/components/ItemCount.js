import {  useState } from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';

export default function ItemCount({initial,stock}) {
  const [counter, setCounter] = useState(initial);
  
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