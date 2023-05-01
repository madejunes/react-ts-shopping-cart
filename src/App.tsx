import { useEffect, useReducer } from 'react'
import './App.css'
import { Product } from './containers/Product'
import { ctx } from './context'
import { reducerFn, initialState } from './reducer'

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch({type: 'ADD_PRODUCTS', payload: data}))
  },[])

  return (
    <ctx.Provider value={state}>
      <div className='app'>
        <Product />
      </div>
    </ctx.Provider>
  )
}

export default App;
