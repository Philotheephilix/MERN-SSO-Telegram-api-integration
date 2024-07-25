import React, { useEffect } from 'react';
import "../css/Home.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, isAuthenticated, user, logout, isLoading } = useAuth0();

  // Auto-login effect
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  // Return loading state if still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      <h1 className="home-logo">Skill First Labs AI Model</h1>
      {isAuthenticated && (
        <div className="user-details">
          <img src={user.picture} alt={user.name} className="user-picture" />
          <h2>Welcome, {user.name}</h2>
          <ul>
            {Object.entries(user).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
          <button className='home-login-but' onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
