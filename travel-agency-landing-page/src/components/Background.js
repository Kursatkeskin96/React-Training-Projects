import React, { Component } from 'react'
import './Background.css'

class Background extends Component {
  render() {
    return (
      <div className='wrapper d-flex flex-column align-items-center'>
        <div className="m-auto d-flex flex-column align-items-center">
        <h1 className="h text-white">Enjoy Your Dream Vacation</h1>
        <p className="p text-white">Travel to the any corner of the world, without going around in circles.</p>
        <button type="button" class="btn btn-primary ">More</button>
      </div>
      </div>
    )
  }
}
export default Background;