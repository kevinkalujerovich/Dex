import React, { useState } from "react";
import ItemList from "./ItemList";
import { Grid } from "@material-ui/core";
export default function ItemCategory({ array }) {
  const [filtrado, setFiltrado] = useState(null);

  const filtrar = (parametro) => {
    setFiltrado(array.filter((x) => x.marca === parametro));
    console.log(filtrado);
  };
  const marcas = array.map((x) => x.marca);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={2}>
        <p>Ordenar por </p>
        {marcas.map((x, i) => (
          <Grid key={i}>
            <button onClick={() => filtrar(x)}>{x}</button>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={10}>
        <Grid container spacing={10}>
          {filtrado ? (
            <ItemList array={filtrado} />
          ) : (
            <ItemList array={array} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
