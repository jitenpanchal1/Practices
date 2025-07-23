import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './Featusr/Counterslice'


function App() {

  const count = useSelector((state) => state.counter.value)
  const dataa = useSelector((state) => state.counter.data)
  const dispach = useDispatch()


  return (
    <>
      <div>
        <div>
          <h2>{count}</h2>
          <h2>{dataa} this si </h2>
          <button
            onClick={() => dispach(increment())}>
            click to Add
          </button>
        </div>
        <div>
          <button
            onClick={() => dispach(decrement())}>
            click to Reduce
          </button>
        </div>
        <div>
          <button
            onClick={() => dispach(incrementByAmount(10))}>
            click to 10 +
          </button>
        </div>
        <div>
          <button
            onClick={() => dispach(reset())}>
              reset 
            </button>
        </div>
      </div>

    </>
  )
}

export default App
