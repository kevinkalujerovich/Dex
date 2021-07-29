import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardMedia, IconButton, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
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
      fontSize: 15,
    },
  },
}));
export default function Item({ name, precio, img, id, category, button }) {
  const classes = useStyles();

  return (
    <NavLink
      to={`/item/${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card className={classes.root}>
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
        <CardActions className={classes.cardActions}>
          <Grid container>
            <Grid item xs={10} sm={10}>
              <Typography
                gutterBottom
                variant="body1"
                className={classes.precio}
              >
                ${precio}
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2}>
              {button === "eliminar" ? (
                <label htmlFor="icon-button-file">
                  <IconButton aria-label="upload picture" component="span">
                    <DeleteIcon style={{ color: "gray", fontSize: 20 }} />
                  </IconButton>
                </label>
              ) : (
                "eliminar"
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </NavLink>
  );
}
