import { useParams , Link } from "react-router-dom";



const Home=()=>{
    const {name}=useParams();
    return (
        <>
        {/* <Link to="/about">Welcome to about page</Link> */}
        <Link to="/">Welcome to Home page</Link>
        {/* <Link to="/user">Welcome to  page</Link> */}
        
        </>
    )

}
export default Home;