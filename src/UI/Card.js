import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const classesToAdd = classes.card + " " + props.className;
  // const classesToAdd = classes.card;

  return <div className={classesToAdd}>{props.children}</div>;
};

export default Card;
