import React from 'react';

const UserList = ({users, onUserSelected}) => {

  const handleUserSelected = (event) => {
    event.preventDefault()
    const selectedUserId = event.target.value
    onUserSelected(selectedUserId)
  }

  const userList = users.map((user, id) => {
    return (
    <section key={id} >
      <a href="/jobs" onClick={handleUserSelected}>
        <li value={user.id}>{user.name}
        </li>
      </a>
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
