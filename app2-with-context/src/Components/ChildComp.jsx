import React from "react";
import { useContext } from "react";
import { UserDetailsContext } from "./UserContext";

const ChildComp = () => {
  const userDetails = useContext(UserDetailsContext);
  console.log(userDetails);
  return <div>
    <ul>
        <li>{userDetails.fname}</li>
    </ul>
  </div>;
};

export default ChildComp;
