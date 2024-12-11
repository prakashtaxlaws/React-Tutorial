import React from 'react'
import Pizza from './Pizza'

export default function Menu() {
  return (
    <>
      <h2>Our menu</h2>
      <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="/spinaci.jpg" price="12"   />
      <Pizza name="Pizza Cheesy" ingredients="Tomato, cheese" photoName="/funghi.jpg" price="12"   />
    </>
  )
}
