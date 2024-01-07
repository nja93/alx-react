import React from 'react'
import HolbertonLogo from '../src/assets/Holberton-Logo.jpg';
import './App.css';
import { getFooterCopy } from './utils';
import { getFullYear } from './utils';

function App() {
  const isIndex = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src= {HolbertonLogo} alt="Holberton-logo" className='App-logo'/>
        <h1 className='headertext'>School dashboard</h1>
      </header>
      <body className="App-body">
        <h1>Login to access the full dashboard</h1>
      </body>
      <footer className="App-footer">Copyright {getFullYear} - {getFooterCopy(isIndex)}
      </footer>
    </div>
  );
}

export default App;
