
import { serviceData } from "../drive-download-20240403T064718Z-001/products";




const Service=()=>{
 
    return(
    <div>
        <div className="container" >
            <div className="row">
           {serviceData.map((item,index)=>(
            <div key={index} className="col-md-3" >
                <div className="card" style={{backgroundColor:item.bg,height:"200px",padding:"10px",gap:"10px",marginTop:"80px"}}>
                    <h2>{item.icon}</h2>
                   <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    

                </div>
            </div>
           ))
           }

            </div>
        </div>

        <h2 style={{marginTop:"80px"}}>Big Discount</h2>
        
    </div>

      
    )
}
export default Service