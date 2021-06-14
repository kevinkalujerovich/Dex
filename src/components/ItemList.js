import Item from "./Item";
import React from "react";
import { Container, Grid } from "@material-ui/core";

export default function ItemList({ array }) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {array.map((item, index) => {
          return (
            <Grid item xs={12} sm={3} key={index}>
              <Item
                name={item.name}
                img={item.img}
                precio={item.precio}
                id={item.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
