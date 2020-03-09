import React from 'react';

const UserList = ({users}) => {

  const userList = users.map((user) => {
    return <li>{user.name}</li>
  })

  return (
    <section>
      <h1>User List Information</h1>
        <ul>
          {userList}
    // <li>User 1</li>
    //   <button>Open Profile</button>
    // <li>User 2</li>
    //   <button>Open Profile</button>
    // <li>User 3</li>
    //   <button>Open Profile</button>
        </ul>

    </section>
  )
};


export default UserList;
