import {  useState } from "react";

export default function ItemCount({initial,stock}) {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");

  const changeCounter = (value) => {
    setCounter(counter + value);
  };

const onAdd=()=>{
counter<stock?setError("Agrego al carrito "+JSON.stringify(counter)+" producto"):setError("Supero el stock actual que es "+JSON.stringify(stock));
}



  return (
      <div>
        <h1>CANTIDAD: {counter}</h1>
        <button onClick={() => changeCounter(-1)}>Restar uno</button>
        <button onClick={() => changeCounter(1)}>Sumar uno</button>
        <br/><br/><br/>
        <button onClick={onAdd}>Agregar al carrito</button>
        <h2>{error}</h2>
      </div>
  );
}