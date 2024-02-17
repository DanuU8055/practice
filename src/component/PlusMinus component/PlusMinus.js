import { useState } from "react";
const PlusMinus = () => {
    const [result , setResult ] = useState(0);
    
    

    const inc = ()=>{
        setResult(result+1)
    }
    const dec = ()=>{
setResult(result-1);
    }
    return (
        <>
        <div className="mainDiv">
            <div className="ResultDiv">
                <h1>{result}</h1>
                

                <button onClick={inc}>plus</button> &nbsp; &nbsp;
                <button onClick={dec}>minus</button>
            </div>
        </div>
        
        </>
    )
}
export default PlusMinus;