import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Allproduct } from '../reduxwork/reduxFeature/Product'

function Addproduct() {

    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.pro)
    const [msg, setmsg] = useState("")

    const [data, setdata] = useState({
        productname: "",
        price: 0,
        qty: 0
    })

    const change = (e) => {
        setdata((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const send = (e) => {

        e.preventDefault()

        setmsg("")
        if (!data.productname) {
            setmsg("Product name is missing")
            return;
        } else if (!data.price) {
            setmsg("Product price is missing")
            return;
        } else if (!data.qty) {
            setmsg("Product quantity is missing")
            return;
        }

        dispatch(Allproduct({
            productname: data.productname,
            price: Number(data.price),
            qty: Number(data.qty)
        }))

        setmsg("Product Added Succesfully")

        setdata({
            productname: "",
            price: 0,
            qty: 0
        })

    }

    return (
        <>
            <div>
                <form onSubmit={send}>
                    <div>
                        <label htmlFor="name">Enter Product Name : </label>
                        <input type="text" id='name' name='productname' value={data.productname} onChange={change} />
                    </div>
                    <div>
                        <label htmlFor="price">Enter Product Price : </label>
                        <input type='tel' id='price' name='price' value={data.price} onChange={change} />
                    </div>
                    <div>
                        <label htmlFor="qty">Enter Product Quantity : </label>
                        <input type="tel" id='qty' name='qty' value={data.qty} onChange={change} />
                    </div>
                    <div>
                        <input type="submit" value="Add Product" />
                    </div>
                </form>
                <div>
                    {loading && <p>Loading...</p>}
                    {error && <p> Error Occures...</p>}
                    {msg && <p>{msg}</p>}
                </div>
            </div>
        </>
    )
}

export default Addproduct
