import React from 'react'

export default function Pizza(props) {
  console.log(props);
  return (
    <>
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
    <img src={props.photoName} alt="Image of Spinaci" className='' />
    <div>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <p>{props.price && props.soldOut ? 'SOLD OUT' : props.price}</p>
    
    </div>
    </li>
    </>
  )
}
