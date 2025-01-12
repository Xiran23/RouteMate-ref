import React from 'react'
import { useSearchParams ,useLocation} from 'react-router-dom'
const ProductList = () => {
  const [SearchParams] = useSearchParams();
  const location = useLocation()
  console.log(location)
  console.log("hey");
  // console.log(SearchParams.get("q"));
  // console.log(SearchParams.get("Keyword"),SearchParams.get("stock"),SearchParams.get("rating"));
  // console.log(SearchParams.get("Keyword.id"),SearchParams.get("stock.id"),SearchParams.get("rating.id"));
  // http://localhost:3000/products/q=chiran 
  // 
  // 
  // // http://localhost:3000/products/Keyword=chiran&stock=true$rating=4

  return (
    <div>
      
    </div>
  )
}

export default ProductList
