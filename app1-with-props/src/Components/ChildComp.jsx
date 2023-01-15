import React from 'react'

const ChildComp = ({message,person,users}) => {
  return (
    <div>
      <h2>{message}</h2>
      <ul>
        <li>{person.fname} - {person.lname}</li>
      </ul>
       <ul>
        {users.map((usr)=> <li>{usr}</li> )}
       </ul>
    </div>
  )
}

export default ChildComp
