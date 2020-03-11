import React from 'react';
// import from './User.css';
import { Link } from 'react-router-dom';

const User = ({ currentUser, userSelected }) => {

  return(

    <ul>
    <Link to="/jobs" onClick={userSelected}>
    <li value={currentUser.id} >{currentUser.name}
    </li>
    </Link>
    </ul>
  )





}



export default User;
