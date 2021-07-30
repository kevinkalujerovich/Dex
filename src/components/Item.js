import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFavorite } from "../contexts/FavoriteContext";
import { CardActions, CardMedia, IconButton, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  iconoItem: {
    color: "gray",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  title: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  root: {
    width: "100%",
    maxHeight: 1030,
  },
  content: {
    paddingBottom: 0,
    paddingTop: 0,
    height: 40,
  },
  contentCategory: {
    paddingBottom: 0,
    paddingTop: 2,
  },
  cardActions: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
  },
  precio: {
    fontWeight: "bold",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
}));
export default function Item({
  name,
  precio,
  img,
  id,
  category,
  button,
  array,
}) {
  const classes = useStyles();
  const favorite = useFavorite();

  const addItem = (id) => {
    favorite.addItem(array.filter((x) => x.id === id)[0]);
  };
  const removeItem = (id) => {
    favorite.removeItem(id);
  };

  return (
    <Card className={classes.root}>
      <NavLink
        to={`/item/${id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <CardContent className={classes.contentCategory}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {category}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" gutterBottom className={classes.name}>
            {name}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions className={classes.cardActions}>
        <Grid container>
          <Grid item xs={10} sm={10}>
            <Typography gutterBottom variant="body1" className={classes.precio}>
              ${precio}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            {button === "eliminar" ? (
              <IconButton
                aria-label="upload picture"
                component="span"
                onClick={() => removeItem(id)}
              >
                <DeleteIcon className={classes.iconoItem} />
              </IconButton>
            ) : (
              <IconButton
                aria-label="upload picture"
                component="span"
                onClick={() => addItem(id)}
              >
                <FavoriteBorderIcon className={classes.iconoItem} />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
