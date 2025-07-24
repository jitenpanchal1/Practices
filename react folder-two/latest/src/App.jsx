import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addproduct } from './refuxfiles/reduxfeature/Addproduct'
import { useNavigate } from 'react-router'


function App() {

  const [data, setdata] = useState({
    productname: "",
    prise: 0,
    qty: 0
  })

  const [msg, setmsg] = useState("")

  const dispach = useDispatch()

  const { loading, error } = useSelector(state => state.products)

  const navigate = useNavigate("")

  const handchange = (e) => {
    setdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const send = (e) => {

    e.preventDefault()

    setmsg("")

    if (!data.productname) {
      setmsg("Product name is required")
      return;
    } if (!data.prise) {
      setmsg("Product price is required")
      return;
    } if (!data.qty) {
      setmsg("Product quantity is required")
      return;
    }

    dispach(Addproduct({
      productname: data.productname,
      prise: Number(data.prise),
      qty: Number(data.qty)
    }))

    setmsg("Product listed succesfully")

    setdata({
      productname: "",
      prise: 0,
      qty: 0
    })
  }

  return (
    <>
      <div>
        <form onSubmit={send}>
          <div>
            <label htmlFor="proname">Product Name : </label>
            <input type="text" id='proname' name='productname' value={data.productname} onChange={handchange} />
          </div>
          <div>
            <label htmlFor="price">Product Price : </label>
            <input type="tel" id='price' name='prise' value={data.prise} onChange={handchange} />
          </div>
          <div>
            <label htmlFor="qty">Product Quantity : </label>
            <input type="tel" id='qty' name='qty' value={data.qty} onChange={handchange} />
          </div>
          <div>
            <input type="submit" value="List The product" />
          </div>
        </form>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error at back site</p>}
      {msg && <p> {msg} </p>}

      <button onClick={() => navigate("/allproduct")}>Allproduct</button>
    </>
  )
}

export default App
