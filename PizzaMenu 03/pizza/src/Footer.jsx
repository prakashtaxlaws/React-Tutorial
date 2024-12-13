import React from 'react'

const hours = new Date().getHours();
const openHours = 11;
const closeHours = 23;

if(hours > openHours && hours < closeHours){
  console.log("we are open");
}
else {
  console.log("We are closed");
}
export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='order'>
        {hours > openHours && hours < closeHours ? (
          <p>We're Currently Open until {closeHours}</p>
          
        ):(
          <p>We're Currently Closed and will open at {openHours}</p>
        )
        
      }
      <div>{hours > openHours && hours < closeHours ? (
<button className='btn'>Order Now</button>
          
        ):(
          <button className='btn'>We will be back soon</button>
        )
      }</div>
        </div>
    </footer>
    </>
  )
}
