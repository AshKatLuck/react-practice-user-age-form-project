import React from "react";
import Card from "../UI/Card";

const UserDataItem = (props) => {
  const content = props.name + "(" + props.age + " years old)";
  return <Card>{content}</Card>;
};

export default UserDataItem;
