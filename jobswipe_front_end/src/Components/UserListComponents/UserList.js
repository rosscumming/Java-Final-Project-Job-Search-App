import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css";
import User from "../UserComponents/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserList = ({ users, onUserSelected }) => {
  const handleUserSelected = event => {
    const selectedUserId = event.target.value;
    onUserSelected(selectedUserId);
  };

  const userList = users.map(user => {
    return (
      <li key={user.id} className="userlist-individual">
      <User
        currentUser={user}
        userSelected={handleUserSelected}
      ></User>
      </li>
    );
  });

  return (
  <article className="user-list">
    <header className="main-header">
    <a href="/" className="logo">
      {" "}
      JOBSWIPE
      <FontAwesomeIcon icon="hand-pointer" className="logo-fa" />
    </a>
    </header>
    <section className="userlist-section">
      <h1>Select User Below</h1>
      <br/><br/>
      <ul className="user-list-ul">{userList}</ul>
    </section>
  </article>
  );
};

export default UserList;
