import React from 'react'

const ProductList = (props) => {

    const handleDelete=(e)=>{
        e.preventDefault();
        console.log(props.list.id)
       const newArrValues= props.arr.filter((item)=>{
            return item.id !== props.list.id
        })
        props.setarr([...newArrValues])
        localStorage.removeItem(props.list.id)
    }

  return (
    <div>
      <ul>
       <li>{props.list.price} - {props.list.name} <button onClick={handleDelete}>Delete Product</button></li>
      </ul>
    </div>
  )
}

export default ProductList
