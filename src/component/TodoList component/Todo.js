import { useState } from "react";
import "./Todo.css"
const Todo=()=>{
    const  [ item , setItem ] = useState("");
    const  [ newItem , setNewItem ] = useState([]);

    const listItem=()=>{
setNewItem((prevData)=>{
    
    return[...prevData , item]
    
})
setItem("")
    }
    return(
        <>
        
        <div className="mainDiv">
            <div className="centerDiv">
        <br/>
        <h1 >ToDo List</h1>
        <br/>
        <input type="text" placeholder="add a item " value={item} onChange={ x => setItem(x.target.value)} />&nbsp;&nbsp;
        <button onClick={listItem}> + </button>
        <ul>
            {
                newItem.map((x)=>(
                    <li>{x}</li>

                ))
            }
        </ul>
            </div>
        </div>
        </>
    )
}
export default Todo;