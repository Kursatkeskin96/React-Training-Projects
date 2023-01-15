import React from 'react';
import './Cards.css'


function Cards(props) {
  return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text text-center">{props.text}</p>
          <a href="#home" className="btn btn-primary">More</a>
        </div>
      </div>
  )
}
export default Cards;