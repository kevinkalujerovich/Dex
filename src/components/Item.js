import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

export default function Item({name,precio,img})  {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={img} width="200" height="200"/>
        <Typography  component="h6">
          {name}
        </Typography>
        <Typography color="textSecondary">
          ${precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
}