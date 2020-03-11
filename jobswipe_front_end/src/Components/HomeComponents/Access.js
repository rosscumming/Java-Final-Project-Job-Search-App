import React from'react';
import './Access.css';



const Access = () => {

  return (

    <section>
    <ul>
    <li>Click 'Register' to create a new JobSwipe profile.</li>
    <li>If registered already click 'Log In'.</li>
    </ul>
    <br/>
    <a className="btn" href="/register">Register </a>
    <a className="btn" href="/users">Log In </a>
    </section>
  )
}


export default Access;
