import React, { Component } from 'react'
import './Footer2.css'

class Footer2 extends Component {
  render() {
    return (
      <div className='footer2 d-flex justify-content-evenly mt-2'>
        <div className='box flex-column align-items-center text-center'>
        <i className="fa-solid fa-location-dot fs-3"></i>
            <h5 className='mt-3 mb-3'>ADDRESS</h5>
            <p className='mb-2'>123/21 First Street, Manchester, King street</p>
            <p>Kingston, United Kingdom</p>
        </div>
        <div className='box flex-column align-items-center text-center'>
        <i className="fa-solid fa-envelope fs-3"></i>
            <h5 className='mt-3 mb-3'>EMAIL</h5>
            <p className='mb-2'>info@company.com</p>
            <p>support@company.com</p>
        </div>
        <div className='box flex-column align-items-center text-center'>
        <i className="fa-solid fa-phone-volume fs-3"></i>
            <h5 className='mt-3 mb-3'>PHONE</h5>
            <p className='mb-2'>+345-677-554</p>
            <p>+345-677-555</p>
        </div>
      </div>
    )
  }
}

export default Footer2;