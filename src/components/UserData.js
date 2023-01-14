import React from "react";
import UserDataList from "./UserDataList";
const UserData = (props) => {
  return (
    <div>
      <UserDataList userData={props.userData} />
    </div>
  );
};
export default UserData;
