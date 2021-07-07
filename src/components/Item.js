import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardMedia } from "@material-ui/core";
const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
  },
  root: {
    width: "100%",
    maxHeight: 1050,
  },
  content: {
    paddingBottom: 0,
    paddingTop: 0,
    height: 80,
  },
  cardActions: {
    paddingTop: 0,
    paddingLeft: 15,
  },
  precio: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default function Item({ name, precio, img, id, category }) {
  const classes = useStyles();

  return (
    <NavLink
      to={`/item/${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {category}
          </Typography>

          <Typography variant="body2" gutterBottom className={classes.name}>
            {name}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography gutterBottom variant="body1" className={classes.precio}>
            ${precio}
          </Typography>
        </CardActions>
      </Card>
    </NavLink>
  );
}
