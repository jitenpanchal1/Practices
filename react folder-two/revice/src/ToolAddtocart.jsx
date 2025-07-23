import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Remove } from './reduxFeature/Addtocartslice'

function ToolAddtocart() {

    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const Totle = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <div className='container text-center'>
            <h1 className=''>This is your Cart </h1>
            {cart.length === 0 && <p className='text-danger text-center'>No Item Added in Cart</p>}
            <div className=''>
                {cart.map((item) => (
                    <div key={item.id} className=''>
                        <h2> Item_Name : {item.name}</h2>
                        <p> Item_Price : {item.price}</p>
                        <p> Item_Quantity : <button onClick={() => dispatch(Minus(item.id))}>-</button>{item.qty} <button onClick={() => dispatch(Plus(item.id))}>+</button></p>
                        <p> Item_Size : {item.size}</p>
                        <p> Item_Img : <img src={item.img} alt="None" /></p>
                        <button onClick={() => dispatch(Remove(item.id))}>Remove</button>
                    </div>
                ))}
                <h1> Totle_Price : {Totle}</h1>
            </div>
        </div>
    )
}

export default ToolAddtocart
