import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  name: {
    fontSize: 12,
  },
  cardMain: {
    height: 320,
    width: 300,
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
      <Card className={classes.cardMain}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {category}
          </Typography>
          <Grid container justify="center">
            <img src={img} width="60%" height="60%" alt="imagen de producto" />
          </Grid>
          <p className={classes.title}>{name}</p>
          <p className="card_precio">${precio}</p>
        </CardContent>
      </Card>
    </NavLink>
  );
}
