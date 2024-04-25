import React from 'react'
import Product from './Product';
 function ProductList(props) {
  
  return (
    props.product.length>0?
    props.product.map((product,i)=>{
      return< Product product={product} key={i} index={i} incrementQuantity={props.incrementQuantity} decrementQuantity ={props.decrementQuantity} removeItems={props.removeItems}/>
    })
    :<h3>Please add items in your cart</h3>
  )
}
export default  ProductList;