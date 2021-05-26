
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 130,
  },
});
export default function Item({model,year,make,img}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
  component="img"
  alt="Contemplative Reptile"
  height="140"
  title="Contemplative Reptile"
  image={img}
          className={classes.media}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {model}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {make}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
