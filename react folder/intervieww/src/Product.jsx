import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Product() {

    const count = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>this is Product</h1>
            <div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Product
