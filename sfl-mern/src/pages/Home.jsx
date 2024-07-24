import "../css/Home.css"
import { Auth0Provider } from '@auth0/auth0-react';
function Home() {
    return (
      <div className="Home">
        <h1 className="home-logo">MERN-AUTH0</h1>
        <h3 className="home-login-but">Login</h3>
      </div>
    );
  }
  
  export default Home;