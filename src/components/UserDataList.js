import React from "react";
import Card from "../UI/Card";
import classes from "./UserDataList.module.css";
const UserDataList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userData.map((user) => {
          const content = user.name + "(" + user.age + " years old)";
          return <li>{content}</li>;
        })}
      </ul>
    </Card>
  );
};
export default UserDataList;
