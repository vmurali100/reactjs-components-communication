import React from "react";
import { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [message] = useState("Welcome to Components Communication ");
  const [person] = useState({
    fname: "murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });
  const [users] = useState(["Murali", "Krishna", "Ram"])
  return (
    <div>
      <ChildComp message={message} person={person} users={users} />
    </div>
  );
};

export default ParentComp;
