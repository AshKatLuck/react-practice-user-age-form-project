import React from "react";
import "./NewUserForm.css";

const NewUserForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>User Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Age</label>
          <input type="text"></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
