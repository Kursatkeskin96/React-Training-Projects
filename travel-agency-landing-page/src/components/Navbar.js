import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary justify-content-between">
  <div className="container-lg d-flex justify-content-center">
    <div className="d-flex align-items-center">
      <a className="navbar-brand" href="#home">
        <img src="./logo192.png" alt="Logo" width="30" height="30" className="align-text-top"></img>
        <span className="">Bootstrap</span>
      </a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
  }
}

export default Navbar;