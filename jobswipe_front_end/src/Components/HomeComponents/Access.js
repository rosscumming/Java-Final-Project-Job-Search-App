import React from'react';
import './Access.css';

const Access = () => {

  return (

    <main>
    <section className="instruction-detail">
    <ul>
    <li>Click 'Register' to create a new JobSwipe profile.</li>
    <li>If registered already click 'Log In'.</li>
    </ul>
    </section>
    <br/><br/>
    <section className="home-links">
    <a className="link-register" href="/register">Register </a>
    <a className="link-login" href="/users">Log In </a>
    <br/>
    <br/>
    </section>
    </main>
  )
}


export default Access;
