import React from "react";
import Card from "../UI/Card";
const UserDataList = (props) => {
  return (
    <div>
      {props.userData.map((user) => {
        const content = user.name + "(" + user.age + " years old)";
        return <Card>{content}</Card>;
      })}
    </div>
  );
};
export default UserDataList;
