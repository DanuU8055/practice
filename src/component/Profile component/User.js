import { useParams , Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"



const User=()=>{
    const params=useParams();
    return (
        <>
        
        {/* <Link to="/about">Welcome to about page</Link> */}
        {/* <Link to="/">Welcome to Home page</Link> */}
        <Link to="/user">Welcome to  User page</Link>
        <div className="text-center">
        <h1 className="text-uppercase" >welcome {params.name} sir</h1>
        <button className="btn btn-outline-success ">Welcome to bootstrap</button>
        </div>
        <div>
        <div className="card" style={{"width":"18rem"}}>
  <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="/" class="btn btn-outline-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
        </>
    )

}
export default User;