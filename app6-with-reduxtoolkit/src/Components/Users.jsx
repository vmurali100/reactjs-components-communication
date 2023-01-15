import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  return (
    <div>
      <h2>Welcome to Users Component !!</h2>
    </div>
  );
};

export default Users;
