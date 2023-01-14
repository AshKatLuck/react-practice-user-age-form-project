import React from "react";

const UserDataItem = (props) => {
  const content = props.name + "(" + props.age + " years old)";
  return (
    <div>
      <li>{content}</li>
    </div>
  );
};

export default UserDataItem;
