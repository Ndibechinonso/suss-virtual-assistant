import React from 'react'
import './Card.css'


export default function Card(props) {
  return (
    <div data-aos={props.anim} className='cardFlex'>
      <div className='iconClass'><i className={props.link}></i></div>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
  )
}

