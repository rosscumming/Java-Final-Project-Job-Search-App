import React from "react";
import Access from './Access';
import logo from '../../JobSwipe.cvg.png'


const Home = () => {
  return (
    <body>
      <header className="main-header"><a href='./'><img class="logo" src={logo}/></a></header>
      <section>
        <h1>Welcome to JobSwipe</h1>
        <p>User Instructions;</p>
        <Access />
      </section>
    </body>
  )


};

export default Home;
