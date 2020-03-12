import React from "react";
import Access from './Access';
import './Home.css';
import logo from '../../assets/JobSwipe_2.png';




const Home = () => (
      <main>
      <link href="https://fonts.googleapis.com/css?family=Baloo+2&display=swap" rel="stylesheet"></link>
        <section className="intro-title">
            <h1>Welcome to JobSwipe</h1>
        </section>
            <img src={logo} className="image" alt="logo" />
      <section className="instructions-header">
        <p>USER INSTRUCTIONS;</p>
        </section>
        <Access />
      </main>



    );

export default Home;
