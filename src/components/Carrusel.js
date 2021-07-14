import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Carrusel_1 from "../img/carrusel_1.jpg";
import Carrusel_2 from "../img/carrusel_2.jpg";
import Carrusel_3 from "../img/carrusel_3.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "100%",
  },
});
export default function Carrusel() {
  var items = [
    {
      img: Carrusel_1,
      link: "/item/22",
    },
    {
      img: Carrusel_2,
      link: "/item/21",
    },
    { img: Carrusel_3, link: "/item/6" },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <NavLink to={props.item.link}>
      <img
        src={props.item.img}
        className={classes.img}
        alt="imagen de publicidad"
      />
    </NavLink>
  );
}
