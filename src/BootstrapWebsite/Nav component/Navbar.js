// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid">
          <Link className="navbar-brand"  to="/"><strong>DANY Guidance </strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
    <div className="collapse navbar-collapse"
     id="navbarSupportedContent">

      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"   aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active"   to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active"  to="/contact">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active"  to="/service">Service</Link>
        </li>

      </ul>
     
    </div>
  </div>
</nav>

</div>
            </div>
        </div>
        </>
    )
}
export default Navbar;