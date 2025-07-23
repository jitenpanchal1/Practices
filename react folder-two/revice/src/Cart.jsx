import React from 'react'
import { useCart } from './Addtocartcompo/Cartcontext'

function Cart() {

    const { cart, dispacher } = useCart()
    return (
        <div>
            <div>{cart.length === 0 ? (
                <h1>Cart is empty</h1>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div>
                                <h1>Item_No : {item.id}</h1>
                                <h3>Item_Quantity : <button onClick={() => dispacher({ type: "upqu", payload: item.id })}>+</button>   {item.qty} <button onClick={() => dispacher({ type: "dqu", payload: item.id })}>-</button></h3>
                                <p> Item_Name : {item.name} </p>
                                <p>Item_price : {item.price}</p>
                                <button onClick={() => dispacher({ type: "remove", payload: item.id })}>Remove</button>
                            </div>
                        </div>
                    ))}
                </>
            )}</div>
        </div>
    )
}

export default Cart
