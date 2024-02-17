import { useState } from "react";
import axios from "axios";
const Contact = ()=>{
    const [ data , setData ] = useState({
        name : "" ,
        mobile : "" ,
        email : "" , 
        password : "" ,
        msg : ""
    })

    const catchEvent = (event) =>{
        const {name , value } = event.target;
        setData((oldValue)=>{
return{
    ...oldValue,
    [name] :value
}
        })
    }

    const handleSubmit=()=>{
        const userDetails = {"name" : data.name , "mobile" : data.mobile , "email" : data.email , "password" : data.password , "message" : data.msg};
axios.post("http://localhost:3001/user/register",userDetails).then((res)=>{
    console.log(res.data);
}).catch((error)=>{
    console.log(error);
})
    }
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">


                <form> 
                <div class="mb-3">
                    
  <label  className="form-label">Name</label>
  <input type="text"
   className="form-control"
    placeholder="Enter Name here"
    name="name"
   value={data.name} 
   onChange={catchEvent} />
</div>

<div class="mb-3">
  <label  className="form-label">Mobile</label>
  <input type="text" 
  className="form-control"  
  placeholder="Enter Number here"
  name="mobile" 
  value={data.mobile} 
  onChange={catchEvent}/>
</div>

<div class="mb-3">
  <label  className="form-label">Email</label>
  <input type="text"
   className="form-control" 
    placeholder="name@example.com"
    name="email" 
    value={data.email}
     onChange={catchEvent}/>
</div>

<div class="mb-3">
  <label  className="form-label">Password</label>
  <input type="password"
   className="form-control" 
   name="password"
   value={data.password} 
   onChange={catchEvent}/>
</div>

<div className="mb-3">
  <label  className="form-label">Message</label>
  <textarea className="form-control" 
  id="exampleFormControlTextarea1"
   rows="3" 
   name="msg"
   value={data.msg} 
   onChange={catchEvent}></textarea>
</div>
<div className="col-12">
    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit} >Register</button>
</div>
</form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;