import {  useState } from "react";

export default function ItemCount({initial,stock}) {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");
  const [errorBis,setErrorBis]=useState("");

  const restarCounter = () => {
    return counter==1 ? (
    setError(`No puede ingresar una cantidad menor a 1`),
    setErrorBis(``)
    ):(
    setCounter(counter-1),
    setErrorBis(``)
    );
  };
  
  const sumarCounter = () => {
    return counter==10?(
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
      <div>
        <h1>CANTIDAD: {counter}</h1>
        <button onClick={() => restarCounter()}>Restar uno</button>
        <button onClick={() => sumarCounter()}>Sumar uno</button>
        <h2>{error}</h2>
        <br/><br/><br/>
        <button onClick={onAdd}>Agregar al carrito</button>
        <h2>{errorBis}</h2>
      </div>
  );
}