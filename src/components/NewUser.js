import React from "react";
import "./NewUser.css";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const saveNewUserHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: (Math.random() * 1000).toString(),
    };
    props.addUserData(userData);
  };
  return (
    <div>
      <NewUserForm onSaveNewUser={saveNewUserHandler}></NewUserForm>
    </div>
  );
};

export default NewUser;
