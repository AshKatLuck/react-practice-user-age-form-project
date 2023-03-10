import React, { useState } from "react";
import NewUserForm from "./components/NewUserForm";
import UserDataList from "./components/UserDataList";

function App() {
  const dummyUserData = [
    {
      id: Math.random().toString(),
      name: "Adrian Monk",
      age: 41,
    },
    {
      id: Math.random().toString(),
      name: "Randy Disher",
      age: 35,
    },
  ];

  const [userData, setUserData] = useState(dummyUserData);

  const addUserDataHandler = (enteredUserData) => {
    setUserData((prevUserData) => {
      return [enteredUserData, ...prevUserData];
    });
  };

  return (
    <div>
      <h1>Add User</h1>
      <NewUserForm addUserData={addUserDataHandler} />
      <UserDataList userData={userData} />
    </div>
  );
}

export default App;
