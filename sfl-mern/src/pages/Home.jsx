import React from 'react';
import "../css/Home.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="Home">
      <h1 className="home-logo">MERN-AUTH0</h1>
      <h3 className="home-login-but" onClick={() => loginWithRedirect()}>Login</h3>
    </div>
  );
}

export default Home;

