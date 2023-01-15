import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='container'>
        <i id="facebook" class="fa-brands fa-facebook"></i>
        <i id='twitter' class="fab fa-twitter"></i>
        <i id='google' class="fab fa-google"></i>
        <i id='linkedin' class="fa-brands fa-linkedin-in"></i>
        <hr></hr>
      </div>
    )
  }
}
export default Footer;
