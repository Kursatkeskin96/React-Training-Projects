import React from 'react'
import './Customers.css'

function Customers(props) {
  return (
    <div className='customers'>
        <img src={props.image} className="image" alt="..."></img>
        <h3 className='name mt-2 mb-4'>{props.name}</h3>
        <p className='comment'>{props.comment}</p>
    </div>
  )
}

export default Customers;