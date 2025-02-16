
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../redux/Cartslice"
import { X } from "react-feather"








const Cart =()=>{
    const cartdata = useSelector((state)=>state.cart)
    const dispatch =useDispatch()
    console.log(cartdata)
    const [quantities, setQuantities] = useState(
        cartdata.reduce((acc,item)=>{
            acc[item.id] =1
            return acc

        },{})

    );
    const handleQuantityChange = (id, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + change 
        }));
    };

    const handleremove=(id)=>{
        dispatch(remove(id))

    }
    //const [count,setCount] =useState(1)

    const Totalprice=()=>{
        return cartdata.reduce((total,item)=>{
            const itemTotal=item.price*(quantities[item.id]||0)
            return total+itemTotal
        },0).toFixed(2)
        
        
    }
    return(

        <div className="conatainer"> 
            <div className="row mt-2 border">
            <div className="col-md-8">
            
                 {
                    cartdata && cartdata.length > 0 ?(
                        cartdata.map((item)=>(
                        <div className="row">
                            <div className="col-md-6">
                                <img src={item.imgUrl} className="img-fluid" style={{height:"200px"}}/>
                             </div>
                             <div className="col-md-3">
                                <h4 className="mt-5">{item.productName}</h4>
                                <p className="mt-5">price:${item.price} *{quantities[item.id||0]}=${(item.price*(quantities[item.id] || 0)).toFixed(2)}</p>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-danger mt-5"
                                onClick={()=>{handleremove(item.id)}}><X/></button><br></br>
                                <button  className="mt-5 m-2 " onClick={()=>{handleQuantityChange(item.id, -1)}} style={{height:'30px' ,width:'30px'}}>-</button>
                                <button  className="mt-5 m-2" onClick={()=>{handleQuantityChange(item.id, 1)}} style={{height:'30px' ,width:'30px'}}>+</button>

                            </div>

                           
                        </div>
                    ))
                    ):<p>please add some product</p>
                }
        </div>
        <div className="col-md-4">
                        <h4 className="mt-5">Cart Summary</h4>
                <p>total price:</p>
                <p>${Totalprice()}</p>
            </div>
             
            </div>
        </div>

        
    )
}
export default Cart



