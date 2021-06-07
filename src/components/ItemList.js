import Item from './Item';
import React from 'react';
import {Container,Grid,CircularProgress} from '@material-ui/core';
import {Box} from '@material-ui/core';

 export default function ItemList({array,load}){
   
return (

  <Container><Grid container spacing={2}>
    {load===false?
  array.map((item,index) =>{
    return (
      <Grid item xs={12} sm={2} md={2} lg={2} key={index}>
     <Item   name={item.name} img={item.img} precio={item.precio} id={item.id} />   
     </Grid>
 
    )}):<Box mx="auto"><CircularProgress /></Box>
        
    }</Grid></Container>);
  }
