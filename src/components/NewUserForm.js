import React, { useState } from "react";
import classes from "./NewUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const NewUserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Enter non empty values for both name and age",
      });
      return;
    }
    if (Number(enteredAge) <= 0) {
      setError({
        title: "Invalid age",
        message: "Age cannot be a negative number",
      });
      return;
    }

    const userData = {
      name: enteredUserName,
      age: enteredAge,
      id: (Math.random() * 1000).toString(),
    };
    props.addUserData(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismissError={errorHandler}
        />
      )}
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
