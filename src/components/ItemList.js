import Item from "./Item";
import React from "react";
import { Grid } from "@material-ui/core";

export default function ItemList({ array, col, button }) {
  return (
    <>
      {array.map((item) => {
        return (
          <Grid item xs={6} sm={col} key={item.id}>
            <Item
              name={item.name}
              img={item.img}
              precio={item.precio}
              id={item.id}
              category={item.category}
              button={button}
            />
          </Grid>
        );
      })}
    </>
  );
}
