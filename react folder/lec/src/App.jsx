import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const count = useSelector((state) => state.counter)
  const dispach = useDispatch()

  return (
    <>
      <h1> conter :  {count}</h1>
      <button onClick={() => dispach({ type: "increament" })}>Increament</button>
    </>
  )
}

export default App
