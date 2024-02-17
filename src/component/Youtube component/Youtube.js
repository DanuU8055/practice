import "./Youtube.css";
import { Link } from "react-router-dom";

const Youtube=(props)=>{
    return(
        <>
    <div className="cards">
        <div className="card">
            <img src={props.imgSrc} className="cardImg"/>
                <div className="cardInfo">
                    <span className="cardCategory"> {props.ott}</span>
                        <h3 className="cardTitle"> {props.title}</h3>
                        <button className="button"><Link to={props.link}>watch now</Link></button>
                    
                </div>
            
        </div>
    </div>
        </>
    )
}
export default Youtube;