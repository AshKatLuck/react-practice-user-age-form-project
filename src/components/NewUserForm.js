import React, { useState } from "react";
import classes from "./NewUserForm.module.css";
import Card from "../UI/Card";

const NewUserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setIsUserNameValid(false);
    }
    if (Number(enteredAge) <= 0) {
      setIsAgeValid(false);
    }
    if (!isUserNameValid) {
      alert("Enter user name");
    } else if (!isAgeValid) {
      alert("enter positive age");
    } else {
      const userData = {
        name: enteredUserName,
        age: enteredAge,
        id: (Math.random() * 1000).toString(),
      };
      props.addUserData(userData);
      setEnteredUserName("");
      setEnteredAge("");
    }
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        ></input>
        <label>Age</label>
        <input
          type="text"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
