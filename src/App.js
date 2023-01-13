import React from "react";
import Card from "./UI/Card";
import NewUser from "./components/NewUser";

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

  return (
    <div>
      <div>
        <h1>Add User</h1>
      </div>
      <Card>
        <div>
          <NewUser />
        </div>
      </Card>
    </div>
  );
}

export default App;
