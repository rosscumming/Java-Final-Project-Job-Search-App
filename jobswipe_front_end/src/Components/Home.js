import React from "react";

const Home = () => (
      <section>
        <h1>Welcome to JobSwipe</h1>
        <h2>Homepage</h2>
        <p>User Instructions</p>

        <ul>
          <li>Click Register to create a new profile.</li>
          <li>If registered already click Log In.</li>
        </ul>
        <br/>
        <a href="/register">Register </a>
        <a href="/users">Log In </a>
      </section>

    );

export default Home;
