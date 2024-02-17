import { createContext } from "react";
import Component_A from "./Component_A";
import { Link } from "react-router-dom";

const FirstName=createContext();


const Context = ( ) =>{
return(
    <>
    <FirstName.Provider value={"Danish Khan"}>
<Component_A/>
    </FirstName.Provider>

    <Link to="/user">User</Link>
    
    </>
)
}
export default Context ; ;
export { FirstName }