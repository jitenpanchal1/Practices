import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../reduxwork/reduxFeature/Addtocart'

function Addtocart() {

    const [allproduct, setallproduct] = useState([])
    const dispatch = useDispatch()
    const cartitem = useSelector(state => state.cart.items)
    const search = useSelector(state => state.search.query || "")

    useEffect(() => {

        fetch("http://localhost:5000/product")
            .then((res) => res.json())
            .then((pro) => {
                setallproduct(pro)
            }).catch((reso) => {
                console.log("data not  fetch from promises", reso)
            })
            
    }, [])

    const Addcart = (product) => {
        dispatch(cart(product))
    }

    const find = (id) => {
        return cartitem.some((item) => item.id === id)
    }

    const filterdata = allproduct.filter((product) =>
        product?.productname?.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center mb-4">All Products</h1>

                {filterdata.length === 0 ? (
                    <p className="text-center">No products available</p>
                ) : (
                    <div className="row g-4">
                        {filterdata.map((item) => (
                            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.productname}</h5>
                                        <p className="card-text">Price: ₹{item.price}</p>
                                        <p className="card-text">Quantity: {item.qty}</p>
                                        <button
                                            onClick={() => Addcart(item)}
                                        >
                                            {find(item.id) ? "Item Added" : "Add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}

export default Addtocart
