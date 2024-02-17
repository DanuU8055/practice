import React , { useState } from 'react';

export default function Combine() {
    const [ item , setItem ] = useState("");
    const [list , setList ] = useState([]);

    const createList = () =>{
        setList( [...list,item])

        
    }
  return (
    <>
      <input type='text' value={item} onChange={event => setItem(event.target.value)}/>
    <button onClick={createList}>add</button>

    {
        list.map((x)=>{
            return(
                <h1>{x}</h1>
                
            )
            
        })
    }
    </>
  )
}
