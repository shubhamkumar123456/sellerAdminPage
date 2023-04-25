import React, { useRef } from 'react'

const Input = (props) => {

 

   const productId=useRef();
   const  SellingPrice=useRef()
   const ProductName=useRef()

    // let arr=JSON.parse(localStorage.getItem("product"))||[]

    const handleClick=(e)=>{
        e.preventDefault()
        let obj={
            id:productId.current.value,
            price:SellingPrice.current.value,
            name:ProductName.current.value
        }
      
        localStorage.setItem(obj.id,JSON.stringify(obj))
        props.cart(obj)
    }

  return (
  
      <form action="">
        <label htmlFor="">Product ID:</label>
        <input ref={productId} type="text" />
        <label htmlFor="">Selling Price:</label>
        <input ref={SellingPrice} type="Number" />
        <label htmlFor="">Product Name:</label>
        <input ref={ProductName} type="text" />
        <button onClick={handleClick}>Add product</button>
      </form>
    
  )
}

export default Input
