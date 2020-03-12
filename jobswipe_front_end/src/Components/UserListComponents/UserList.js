import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css";
import User from "../UserComponents/User";
import logo from '../../JobSwipe.cvg.png'

const UserList = ({ users, onUserSelected }) => {
  const handleUserSelected = event => {
    const selectedUserId = event.target.value;
    onUserSelected(selectedUserId);
  };

  const userList = users.map(user => {
    return (
      <User
        key={user.id}
        currentUser={user}
        userSelected={handleUserSelected}
      ></User>
    );
  });

  return (
  <article>
    <header className="main-header"><a href='./'><img className="logo" src={logo}/></a></header>
    <section>
      <h1>Choose your JobSwipe profile to begin job searching;</h1>
      <ul className="user-list-ul">{userList}</ul>
    </section>
  </article>
  );
};

export default UserList;
