import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Badge,IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
            <StorefrontIcon color="inherit"/>
          <Typography variant="h6" className={classes.title}>
            Tienda
          </Typography>
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
