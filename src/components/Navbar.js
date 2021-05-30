import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Badge,IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartWidget from './CartWidget';
import {Button } from '@material-ui/core';
import{NavLink} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const categorias = [
  { link: '/category/Camisetas', text: 'Camisetas' },
  { link: '/category/Botines', text: 'Botines' },
  { link: '/category/Remeras', text: 'Remeras' }
];

export default function Navbar() {
  const classes = useStyles();
  


  return (   <div>
         <AppBar position="fixed">
        <Toolbar>
        <CartWidget/>
          <Typography variant="h6" className={classes.title}>
        <NavLink to="/"
        activeStyle={{
        color: "white",
        textDecoration: 'none' }}>Tienda</NavLink>
          </Typography>
          {categorias.map((x,index) =>
       <NavLink to={x.link} activeStyle={{
        fontWeight: "bold",
        color:'#3f50b5',
        textDecoration: 'none',
        background:"white"
         }} style={{ textDecoration: 'none',color:"white", fontWeight: "bold",}} key={index}><Button color="inherit">{x.text}</Button></NavLink>)}
          <IconButton  color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
      </div>
  );
}
