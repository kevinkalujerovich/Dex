import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';
import ItemCount from './ItemCount';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ItemDetail({img,description,nombre,precio}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Box mt={2} >
          <Typography  variant="h5" component="h3">
            ${precio}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    <ItemCount initial={1} stock={10}/>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
        <Button size="small" color="primary">
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
}