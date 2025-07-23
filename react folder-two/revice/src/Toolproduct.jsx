import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addtocart } from './reduxFeature/Addtocartslice'



function Toolproduct() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const [product, setproduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/product")
            .then((res) => res.json())
            .then((result) => setproduct(result))
            .catch((error) => console.log(error))
    }, [])

    const tocart = (item) => {
        dispatch(Addtocart(item))
    }

    const IsAdd = (id) => {
        return cart.some(p => p.id === id)
    }

    return (
        <div className='container'>
            <h1>This is all product</h1>
            <div>
                {product.map((item) => (
                    <div key={item.id}>
                        <h2> Item_Name : {item.name}</h2>
                        <p> Item_Price : {item.price}</p>
                        <p> Item_Quantity : {item.qty}</p>
                        <p> Item_Size : {item.size}</p>
                        <p> Item_Img : <img src={item.img} alt="None" /> </p>
                        <button
                            disabled={IsAdd(item.id)}
                            onClick={() => tocart(item)}>
                            {IsAdd(item.id) ? "Item Added" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Toolproduct
