import React from 'react'
import HolbertonLogo from '../src/assets/Holberton-Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {HolbertonLogo} alt="Holberton-logo" className='App-logo'/>
        <h1 className='headertext'>School dashboard</h1>
      </header>
      <body className="App-body">
        <h1>Login to access the full dashboard</h1>
      </body>
      <footer className="App-footer">Copyright 2020 - holberton School
      </footer>
    </div>
  );
}

export default App;
