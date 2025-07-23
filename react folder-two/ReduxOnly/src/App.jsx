import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchpro } from './reduxwork/Thunkslice'


function App() {

  const dispatch = useDispatch()
  const { Loading, Product, error } = useSelector((state) => state.Product)

  useEffect(() => {
    dispatch(fetchpro());
  }, [dispatch])

  return (
    <>
      <div>
        {Loading && <h1>Data Fetching...</h1>}
        {error && <h1> Failed To Fetch </h1>}
      </div>
      <div>
        <h1>This is title</h1>
        {Product.map((item, index) => (
          
          <div key={item.id}>
            <h1>{index}  {item.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
