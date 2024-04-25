import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';
import ProductList from './Components/ProductList';
import Footer  from './Components/Footer';
import AddItems from './Components/AddItems';




function App() {
  const products=[

    {price:100000,
    Name: "Macbook",
  quantity: 3,},

  { price :2000,
  Name: "Watch",
quantity:4,}
  ]
  let[product, setproducts]=useState(products)
  let[totalAmount, setTotalAmount]=useState(0)


   const incrementQuantity=(index)=>{
    let newproducts=[...product]
    let newTotalAmount=totalAmount
    newproducts[index].quantity++
    newTotalAmount+=newproducts[index].price
    setproducts(newproducts);
    setTotalAmount(newTotalAmount);
  }


 
  const decrementQuantity =(index)=>{
    let newproducts=[...product]
    let newTotalAmount=totalAmount
   if( newproducts[index].quantity>0)
   {
    newproducts[index].quantity--
    newTotalAmount-=newproducts[index].price
  }
    setTotalAmount(newTotalAmount);
    setproducts(newproducts);
  }


const resetQuantity=()=>{
  let newproducts=[...product]
  newproducts.map((products)=>{
    products.quantity=0
  })
  setproducts(newproducts);
  setTotalAmount(0)
}
const removeItems = (index)=>{
  let newproducts=[...product]
  let newTotalAmount=totalAmount
  newTotalAmount-=newproducts[index].quantity*newproducts[index].price

  newproducts.splice(index,1);
  setproducts(newproducts);
  setTotalAmount(newTotalAmount);
}

const addItem=(name,price)=>{
  let newproduct=[...product];
  newproduct.push({
    price:price,
    Name:name,
    quantity :0
  
  });
  setproducts(newproduct);
}


  return (
    <>
    <Navbar/>
    <AddItems  addItem={addItem}/>
   <main className='container mt-5'> 
   <ProductList product={product} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItems={removeItems}/></main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    
    </>
    
  );
}

export default App;

