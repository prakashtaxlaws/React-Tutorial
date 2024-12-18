import React, { useState } from 'react'

export default function Form() {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);


    function handleInput(e){
        setQuantity(Number(e.target.value));
    }

    // Getting value from Input box 
    function handleDescription(e) {
        setDescription(e.target.value);
    }

    // Form Reset 
    function handleSubmit(e) {
        e.preventDefault();

        if(!description){
            alert('Please add an item');
        }

        const newItems = {
            description, quantity , packed:false, id:Date.now()
        };
        console.log(newItems);

        setDescription('');
        setQuantity(1);
    }

    

  return (
    <>
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip ?</h3>
        <select value={quantity} onChange={handleInput} name="" id="">
            {Array.from({length:20},(_,i)=>i+1).map(num =><option value={num} key={num}>{num}</option>)}
                </select>
        <input type="text" name="" id="" placeholder='Items' value={description} onChange={handleDescription} />
        <button>Add</button>
    </form>
    </>
  )
}
