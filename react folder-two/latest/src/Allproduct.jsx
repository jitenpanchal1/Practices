import React from 'react'
import { useSelector } from 'react-redux'

function Allproduct() {

    const allproduct = useSelector(state => state.products.item)

    return (
        <div>
            {allproduct.length === 0 && <p>No Product Addded Yet</p>}

            <div>
                {allproduct.map((item) => (
                    <div key={item.id}>
                        <h1>Item Name : {item.productname} </h1>
                        <h1>Item Price : {item.prise} </h1>
                        <h1>Item Quantity : {item.qty} </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Allproduct
