import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './containers/Product'

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <div className='app'>
      <Product />
    </div>
  )
}

export default App
