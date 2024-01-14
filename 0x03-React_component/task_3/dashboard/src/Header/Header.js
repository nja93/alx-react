import React from "react";
import HolbertonLogo from '../assets/Holberton-Logo.jpg'
import './Header.css';

function Header(){
    return(  
    <div className="App">
        <header className="App-header">
            <img src= {HolbertonLogo} alt="Holberton-logo" className='App-logo'/>
            <h1 className='headertext'>School dashboard</h1>
        </header>
    </div>
  )
}

export default Header
