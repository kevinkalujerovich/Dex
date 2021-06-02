import React from 'react';
import {Typography,Grid,Box,Button} from '@material-ui/core';
import ItemCount from './ItemCount'


export default function ItemDetail({img,description,name,precio}) {
  return (
    <Box mt={6}>
    <Grid container spacing={3} >
        <Grid item xs={12} sm={6} >
      <img src={img} width="200px" heigth="200" alt="imagen de producto"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3"  gutterBottom>
        {name}
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${precio}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {description}
      </Typography>
      <Box mt={6}>
      <Grid container spacing={2} >
        <Grid item xs>
      <ItemCount stock={10} initial={1}/>
        </Grid>
        <Grid item xs>
        <Button variant="contained" color="primary" >Agregar al carrito</Button>
        </Grid>
        </Grid>
        </Box>
      </Grid>
     
        </Grid>
        </Box>
  );
}
