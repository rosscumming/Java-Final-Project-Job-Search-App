import React, { Component } from 'react';

class UserList extends Component {

render() {
  return(
    <section>
    <h1>User List Information</h1>
    <ul>
        <li>User 1</li>
          <button>Open Profile</button>
        <li>User 2</li>
          <button>Open Profile</button>
        <li>User 3</li>
          <button>Open Profile</button>
    </ul>

    </section>
  )
}



}
export default UserList;
