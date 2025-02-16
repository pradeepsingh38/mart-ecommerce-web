import React, { useEffect, useState } from "react"
import { products } from "../drive-download-20240403T064718Z-001/products"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../redux/Cartslice";
import { toast, ToastContainer } from 'react-toastify';

import { RiStarSFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { Star } from "react-feather";











const Shop=()=>{
    const [category, setcategory] = useState("sofa");
    const [filterproduct,setfilterproduct]=useState([])
   
    useEffect(()=>{
        const filteredProducts=products.filter(product=>product.category===category)
        setfilterproduct(filteredProducts);
    },[category]);

    const handleFilter = (value) => {
        setcategory(value);
      };
      const [data,setData]=useState(false)


      const dispatch=useDispatch();
      const{id}=useParams();
      const addtocart=(item)=>{
          dispatch(add(item))
          setData(true)
          toast.success('product has been added to cart')
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
        <div className="body" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "black" }}>
          <h1 style={{color:"white"}}>product</h1>
  
        </div>
        <div  style={{marginTop:'100px'}}>
       <div className='row'>
        <div className='col-md-4'>
        <div>
          <select onChange={e => handleFilter(e.target.value)}>
        
            <option value='sofa'>Sofa</option>
            <option value='chair'>Chair</option>
            <option value='mobile'>Mobile</option>
            <option value='wireless'>Wireless</option>
            <option value='watch'>watch</option>
          </select>
        </div>
        </div>
        
       </div>
        <div className='row mt-5'>
          {filterproduct.map(item => (
            <div className='col-md-4 mt-3 mb-5' key={item.id}>
              <div className='card'style={{height:'500px',width:'350px'}}>
                <div className='card-body'>
                <img src={item.imgUrl} alt={item.name} style={{ height: '250px', width: '200px' }} />
                <h1>{item.productName}</h1>
                <div className="stars-container" style={{fill:"gold"}}>
                            {renderStars(item.rating)}
                        </div>
                <p>     category: {item.category}</p>
                      <h4 >${item.price} <button className="button" onClick={()=>{addtocart(item)}} >+</button></h4> 
                          
                         
                  </div>
                </div>
            </div>
          ))}
        </div>
        {filterproduct.length === 0 && <h1>No products found</h1>}
        </div>
      </div>
    );
  };
  

export default Shop


