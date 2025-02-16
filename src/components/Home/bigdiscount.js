import { PlusCircle, Star} from "react-feather";
import { discoutProducts, products } from "../drive-download-20240403T064718Z-001/products";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { add } from "../redux/Cartslice";
import { useDispatch } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import  "./Home.css"


const Bigdiscount=()=>{
 
const [addtocart,setaddtocart]=useState()
// const [data,setdata]=useState(false)
const {id }=useParams()
console.log(id)
const dispatch=useDispatch()
const bigitem=products.find((item)=>item.id===id)


 function click(item){
      dispatch(add(item))
      // setdata(true)
      toast.success("added to cart")

    }

    const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
          stars.push(
              <Star key={i} fill={i < rating ? "  star gold" : "star"} stroke="gold" strokeWidth={2} />
          );
      }
      return stars;
  };
    return(
        <div>
             
            
            <div className='container'>
               <div className='row'>
                { discoutProducts.map((item,index)=>(
                  <div  key={index}className='col-md-4 mt-4'>
                  
                    <div className='card p-2' 
                    style={{height:"400px",width:"300px",marginLeft:"30px"}} >
                      
                        <button className="bigbtn">{item.discount}%Off</button>
                        <Link to={`/Product/${item.id}`}>
                        <img src={item.imgUrl} alt={item.productName}
                        style={{height:"250px",width:"250px"}}/>
                        </Link>
                        <p>{item.productName}</p>
                        <div className="stars-container" style={{fill:"gold"}}>
                            {renderStars(item.avgRating)}
                        </div>
                        <h2>${item.price}</h2>

                       
                        <h2  onClick={()=>{click(item)}} className="position-absolute bottom-0 end-0 m-3 " 
                            style={{borderRadius:"50px",width:"25px",}} 
                           
                          ><PlusCircle/> </h2>
                       
                     
                    </div>
                   
           
                  </div>
                ))}
              </div>

            </div>

      </div>


        
    )
}
export default Bigdiscount

