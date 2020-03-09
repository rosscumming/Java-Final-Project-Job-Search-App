import React from 'react';

const UserList = ({users}) => {

  const userList = users.map((user, id) => {
    return <li key={id}>{user.name}</li>
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
