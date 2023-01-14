import React, { useState } from "react";
import Card from "./UI/Card";
import NewUser from "./components/NewUser";
import UserData from "./components/UserData";

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
      <div>
        <h1>Add User</h1>
      </div>
      <Card>
        <div>
          <NewUser addUserData={addUserDataHandler} />
        </div>
      </Card>
      <Card>
        <div>
          <UserData userData={userData} />
        </div>
      </Card>
    </div>
  );
}

export default App;
