import React, { useState } from "react"
import { products } from "../drive-download-20240403T064718Z-001/products";
import { PlusCircle, Star} from "react-feather";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import { add } from "../redux/Cartslice";






const BestSales = () => {
    const salesid = ["01", "02", "03", "26", "04", "05", "06", "27"];

    const [addtocart,setaddtocart]=useState()
    const {id }=useParams()
    console.log(id)
    const dispatch=useDispatch()
    const [data,setdata]=useState()
    const bigitem=products.find((item)=>item.id===id)

    function click(item){
        dispatch(add(item))
        setdata(true)
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
    };
    
    


    return (
        <div>
            <h2>Best Sales</h2>
            <div className='container'>
                <div className='row'>
                    {products.map((item) => (
                        salesid.includes(item.id) && (
                            <div className='col-md-4' key={item.id}>
                                
                                <div className='card' style={{height:"400px",width:"300px",marginLeft:"30px",marginBottom:"30px"}}>
                                    
                                <Link to={`/Product/${item.id}`}>
                                    <img src={item.imgUrl} alt={item.productName} 
                              style={{height:"250px",width:"250px"}}/>
                                </Link>
                                    <p>{item.productName}</p>
                                    <div className="stars-container" style={{fill:"gold"}}>
                                    {renderStars(item.rating)}
                                    </div>

                                   
                                    <h2>${item.price}</h2>
                                    <h2 onClick={() => click(item)} className="position-absolute bottom-0 end-0 m-3" 
                                        style={{ borderRadius: "50px", width: "25px", height: "25px" }}>
                                        <PlusCircle/> 
                                    </h2>
                                   
                                </div>
                                
                                
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSales;

