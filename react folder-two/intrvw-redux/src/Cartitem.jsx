import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus, remove } from './reduxfile/reducfeature/Addtocart'

function Cartitem() {

    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    return (
        <>
            {cart.length == 0 && <h1>No item Added</h1>}
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h1>Item_Name : {item.name}</h1>
                        <h1>Item_Size : {item.size}</h1>
                        <h1>Item_Qty :
                            <button onClick={() => dispatch(minus(item.id))}>-</button> {item.qty} <button onClick={() => dispatch(plus(item.id))}>+</button></h1>
                        <h1>Item_Price : {item.price}</h1>
                        <button onClick={() => dispatch(remove(item.id))}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cartitem
