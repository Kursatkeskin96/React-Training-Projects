import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md">
  <div className="container-lg d-flex ms-4">
      <a className="navbar-brand" href="#home">
        <img src="./logo192.png" alt="Logo" width="30" height="30" className="align-text-top"></img>
        <span className="">tavelagency.com</span>
      </a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="contact">Contact</a>
        </li>

      </ul>
    </div>
</nav>


    )
  }
}

export default Navbar;