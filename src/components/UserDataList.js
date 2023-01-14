import React from "react";
import UserDataItem from "./UserDataItem";
const UserDataList = (props) => {
  return (
    <div>
      {props.userData.map((user) => {
        return <UserDataItem key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
};
export default UserDataList;
