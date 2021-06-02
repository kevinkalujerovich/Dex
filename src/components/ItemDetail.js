import React from 'react';
import {Typography,Container} from '@material-ui/core';



export default function ItemDetail({img,description,name,precio}) {
  return (
    <Container maxWidth="sm">
      <img src={img}  alt="imagen de producto"/>
      <Typography variant="h2" component="h2" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h2" gutterBottom>
        ${precio}
      </Typography>
      <Typography variant="p" gutterBottom>
        {description}
      </Typography>
  </Container>
  );
}