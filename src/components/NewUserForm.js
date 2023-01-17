import React, { useState } from "react";
import classes from "./NewUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsUserNameValid(false);
      return;
    }
    if (Number(enteredAge) <= 0) {
      setIsAgeValid(false);
      return;
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
    <div>
      <ErrorModal title="Some Error" message="Some error occured" />
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
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewUserForm;
