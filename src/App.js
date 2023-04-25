import React, { useEffect } from 'react'
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {

  const arr=[];
  const [newArr, setnewArr] = useState(arr);
 

  const addtoCart=(details)=>{
    setnewArr([...newArr,details])
  }
  console.log(newArr)
  let sum=0;
  return (
    <div className="App">
      <Input cart={addtoCart}/>
      <div>
      {newArr.map((ele)=>{
        return  <ProductList list={ele} key={ele.id} arr={newArr} setarr={setnewArr}/>
      })}
      </div>
      <p>Totoal value Worth of Product: Rs <span>{
        newArr.forEach((item)=>{
          sum+=+item.price
        })
        
        }
        </span> <span>{sum}</span></p>
       
      
    </div>
  );
}

export default App;
