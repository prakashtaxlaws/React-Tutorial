import React from 'react'
import Pizza from './Pizza'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false,
  },
];


export default function Menu() {
  return (
    <>
      {/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="/spinaci.jpg" price="12"   />
      <Pizza name="Pizza Cheesy" ingredients="Tomato, cheese" photoName="/funghi.jpg" price="12"   /> */}
      <div className='menu'>
      <h2>Our menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
      </p>
        <ul className='pizzas'>
          {pizzaData.map((pizza)=>(
            <Pizza name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} photoName={pizza.photoName} soldOut={pizza.soldOut}/>

          ))}
        </ul>
      </div>
    </>
  )
}
