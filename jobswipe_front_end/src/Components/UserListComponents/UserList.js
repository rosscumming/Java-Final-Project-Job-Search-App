import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = ({users, onUserSelected}) => {

  const handleUserSelected = (event) => {
    const selectedUserId = event.target.value
    onUserSelected(selectedUserId)
  }

  const userList = users.map((user, id) => {
    return (
    <section key={id} >
      <Link to="/jobs" onClick={handleUserSelected}>
        <li value={user.id} >{user.name}
        </li>
      </Link>
    </section>
  )

  })

  return (
    <section>
      <h1>User List Information</h1>
        <ul>
          {userList}
        </ul>

    </section>
  )
};


export default UserList;
