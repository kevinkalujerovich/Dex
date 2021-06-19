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
      <Card className="card_main">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {category}
          </Typography>
          <Grid container justify="center">
            <img
              src={img}
              width="100%"
              height="100%"
              alt="imagen de producto"
            />
          </Grid>
          <Typography variant="body1">{name}</Typography>
          {name.length < 33 && (
            <>
              <br />
              <br />
            </>
          )}

          <p className="card_precio">${precio}</p>
        </CardContent>
      </Card>
    </NavLink>
  );
}
