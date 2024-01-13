import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';


function App() {
  return (
    <>
      <Notifications />
      <Header />
      <body className="App-body">
        <h1>Login to access the full dashboard</h1>
        <Login />
      </body>
     <Footer />
    </>
  );
}

export default App;

