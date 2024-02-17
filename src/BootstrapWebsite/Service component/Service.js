import Card from "../Card component/Card";
import Sdata from "../Card component/SData";
const Service = ()=>{
    return (
        <>
        <div className="my-5">
           <h1 className="text-center">Our Service</h1>
       </div>
       <div className="container-fluid mb-5 ">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row gy-4">
                        {
                            Sdata.map((x)=>(
                            <Card cardImage={x.cardImage}
                            cardTitle={x.cardTitle}/>
                            ))
                        }
   
                       </div>
          </div>
          </div>
          </div>
       </>
    )
}
export default Service;