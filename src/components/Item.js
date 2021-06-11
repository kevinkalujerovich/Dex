import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 200,
    heigth: 600,
  },
});

export default function Item({ name, precio, img, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={img} width="150" height="150" alt="imagen de producto" />
        <Typography variant="body2" gutterBottom>
          {name}
        </Typography>
        <Typography color="textSecondary">${precio}</Typography>
      </CardContent>
      <CardActions>
        <NavLink
          to={`/item/${id}`}
          activeStyle={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Button size="small">Ver mas</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
