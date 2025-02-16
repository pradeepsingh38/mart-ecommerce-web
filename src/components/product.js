

import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { products } from "./drive-download-20240403T064718Z-001/products";
import { useDispatch } from "react-redux"
import { add } from "./redux/Cartslice"
import { PlusCircle, Star } from "react-feather";
import { ToastContainer,toast } from "react-toastify";







const Product=(page)=>{
    const [addtocart,setaddtocart] =useState(false)

    const [quantity, setQuantity] = useState(1);
    const {id}=useParams()
    console.log(id)
    const dispatch=useDispatch()
    const details=products.find((item)=>item.id===id)
    const sameproducts= products.filter((item) => item.category === details.category && item.id !== details.id);



    const handleAddToCart = (product) => {
        dispatch(add({ ...product, quantity }));
        setaddtocart(true);
    };
    function  click (item){
        dispatch(add(item))
        toast.success("add to cart")
       }
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star key={i} fill={i < rating ? "  star gold" : "star"} stroke="gold" strokeWidth={2} />
            );
        }
        return stars;
}
  



 
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={details.imgUrl} alt={details.name} style={{height:"300px",width:"300px"}}/>
            </div>
            <div className="col-md-6">
                <h2>{details.productName}</h2>
            <div>
            <div className="stars-container" style={{fill:"gold"}}>
                {renderStars(details.avgRating)}
            </div>
            <div>
            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}
              style={{width:"60px",height:"30px"}}/>
            </div>
                <button style={{backgroundColor:"blueviolet",color:"white"}}
               onClick={()=>{handleAddToCart(details)}}>{addtocart ? "Added":"Add to Cart"}</button> 
            </div>
            </div>
           
        </div>
        <div className="container">
             <div className="row">
           {sameproducts.map((item, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card" style={{ height: '400px', width: '250px', boxShadow: 'rgba(0,0,0,0.1)0px 4px 12px', border: 'none' }}>
                <Link to={`/Product/${item.id}`}>
                  <img src={item.imgUrl} alt={item.title} style={{ height: '250px', width: '200px', alignItems: 'center' }} />
                  </Link>
                  <h4>{item.productName}</h4>
                  <h4>
                   
                  </h4>
                
                   <h4 >${item.price} </h4>
                   <h2 onClick={() => click(item)} className="position-absolute bottom-0 end-0 m-3" 
                              style={{ borderRadius: "50px", width: "25px", height: "25px" }}>
                            <PlusCircle/> 
                    </h2>
               
              </div>
            </div>
          ))}
        </div>
            </div>

        
    </div>
        
    )
}
export default Product








