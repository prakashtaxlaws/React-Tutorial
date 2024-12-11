import React from 'react'

export default function Pizza(props) {
  console.log(props);
  return (
    <>
    <img src={props.photoName} alt="Image of Spinaci" className='imagespizza' />
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <p>{props.price}</p>
    </>
  )
}
