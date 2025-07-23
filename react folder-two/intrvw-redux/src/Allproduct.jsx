import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './reduxfile/reducfeature/Addtocart'

const product = [
    { id: 1, name: "dhoti", size: 6, qty: 1, baseprice: 200, price: 200 }
]

function Allproduct() {

    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const some = (id) => {
        return cart.some(pro => pro.id === id)
    }

    return (
        <>
            <h1> This is Product</h1>
            {product.map((item) => (
                <div key={item.id}>
                    <h1>Item_Name : {item.name}</h1>
                    <h1>Item_Size : {item.size}</h1>
                    <h1>Item_Qty : {item.qty}</h1>
                    <h1>Item_Price : {item.price}</h1>
                    <button
                        disabled={some(item.id)}
                        onClick={() => dispatch(add(item))}>
                        {some(item.id) ? "Item Added" : "Add Item"} </button>
                </div>
            ))}
        </>
    )
}

export default Allproduct
