
import Service from "./Service"

import Bigdiscount from "./bigdiscount"
import Slider from "./Slider"
import Newarrivals from "./Newarrivals"
import BestSales from "./BestSales"




// import Product from "./product"


const Home=()=>{
 
  
  return(
    <div>
      <Slider/>
      <Service/>
      <Bigdiscount/>
      <Newarrivals/>
      <BestSales/>
      {/* <Product/> */}
      
      
      
      

      

    </div>
  )
}
export default Home

