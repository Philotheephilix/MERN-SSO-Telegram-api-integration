import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';
import history from './api/history';
function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <Router history={history}>
    <>
      <Header />
      <Home />
      <Footer />
    </>
    </Router>
  );
}

export default App;
