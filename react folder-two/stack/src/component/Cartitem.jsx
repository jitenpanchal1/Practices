import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus, remove } from '../reduxwork/reduxFeature/Addtocart'

function Cartitem() {

    const cartpro = useSelector(state => state.cart.items);
    const dispach = useDispatch()

    return (
        <div>
            <div className='text-center mt-5'>
                {cartpro.length === 0 && <h1>No item Added</h1>}
            </div>

            {cartpro.map((item) => (
                <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{item.productname}</h5>
                            <p>Total Price: ₹{item.total}</p>
                            <p className="card-text">Quantity:
                                <button
                                    className='me-1'
                                    onClick={() => dispach(minus(item.id))}>-</button>
                                {item.qty}
                                <button
                                    className='ms-1'
                                    onClick={() => dispach(plus(item.id))}>+</button>
                            </p>
                            <button onClick={() => dispach(remove(item.id))}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cartitem