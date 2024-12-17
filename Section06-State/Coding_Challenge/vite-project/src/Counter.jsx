import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const date= new Date("July 28 2025");
    date.setDate(date.getDate() + count);
    function handleAddCount(){
        setCount((c) => c + step);
    }
    function handleSubCount(){
        
        count > 0 ? setCount((c) => c - step) : setCount(0);
    }

    function handleAddStepCount(){
        setStep((c) => c + 1);
    }
    function handleSubStepCount(){
        
        count > 0 ? setStep((c) => c - 1) : setStep(0);
    }
    
  return (
    <>
    <div>
  
    <div>
        <button onClick={handleSubStepCount}>-</button>
        <span>Steps:{step}</span>
        <button onClick={handleAddStepCount}>+</button>
    </div>
    <div>
        <button onClick={handleSubCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleAddCount}>+</button>
    </div>
    <p>{count === 0 ? "Today is" : count > 0 ? `${count} days from today` : `${count} days ago was`}</p>
    <h1>{ date.toDateString()
}</h1>
    </div>
    </>
  )
}
