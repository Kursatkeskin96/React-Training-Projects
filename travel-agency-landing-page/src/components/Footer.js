import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='container'>
        <a href="www.facebook.com"> <i id="facebook" class="fa-brands fa-facebook"></i></a>
        <a href="www.twitter.com"><i id='twitter' class="fab fa-twitter"></i></a>
        <a href="www.gmail.com"><i id='google' class="fab fa-google"></i></a>
        <a href="www.linkedin.com"><i id='linkedin' class="fa-brands fa-linkedin-in"></i></a>
      </div>
    )
  }
}
export default Footer;
