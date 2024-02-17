import { FirstName } from "./Context";
const Component_C = ( ) =>{
    return(
        <>
        <FirstName.Consumer>{((fName)=>{
return(
<h1>My Name is {fName}</h1>
)
        })}</FirstName.Consumer>
        
        </>
    )
}
export default Component_C;