import { Link } from "react-router-dom";
const Card =(props)=>{
    return (
        <>
        
        
                            <div className="col-md-4 col-10 mx-auto">
                            <div className="card" >
  <img src={props.cardImage}  height="300" width="300" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold" style={{"fontWeight":"bold"}}>{props.cardTitle}</h5>
    <p className="card-text ">Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
    <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
           
        </>
    )
}
export default Card;