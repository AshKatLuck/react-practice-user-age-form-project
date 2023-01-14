import React, { useState } from "react";
import "./NewUserForm.css";

const NewUserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredUserName,
      age: enteredAge,
    };
    props.onSaveNewUser(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
