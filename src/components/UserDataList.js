import React from "react";
import UserDataItem from "./UserDataItem";
const UserDataList = (props) => {
  return (
    <ul>
      {props.userData.map((user) => {
        return <UserDataItem key={user.id} name={user.name} age={user.age} />;
      })}
    </ul>
  );
};
export default UserDataList;
