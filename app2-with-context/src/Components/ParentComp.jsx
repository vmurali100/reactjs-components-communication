import React, { useState } from "react";
import ChildComp from "./ChildComp";
import { UserDetailsContext } from "./UserContext";
const ParentComp = () => {
  const [message] = useState("Welcome to Components Communication ");
  const [person] = useState({
    fname: "murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });
  const [users] = useState(["Murali", "Krishna", "Ram"]);

  return (
    <div>
      <UserDetailsContext.Provider value={person}>
        <ChildComp />
      </UserDetailsContext.Provider>
    </div>
  );
};

export default ParentComp;
