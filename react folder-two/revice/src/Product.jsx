import React from 'react'
import { useCart } from './Addtocartcompo/Cartcontext'


function Product() {

    const { dispacher } = useCart()

    const product = [
        { id: 1, name: "jalebi", price: 50, },
        { id: 2, name: "jambu", price: 20, },
        { id: 3, name: "sush", price: 100, }
    ]
    return (
        <div>
            <ul>
                {product.map((item) => (
                    <li key={item.id}>
                        {item.id}, {item.name}, {item.price}
                        <button onClick={() => dispacher({ type: "Add", payload: item })}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product
