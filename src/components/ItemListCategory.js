import React from "react";
import { Grid } from "@material-ui/core";
import ItemList from "./ItemList";

export default function ItemListCategory({ array }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={2}>
        asdakljdklajdklasj
      </Grid>
      <Grid item xs={12} sm={10}>
        <ItemList productos={array} />
      </Grid>
    </Grid>
  );
}
