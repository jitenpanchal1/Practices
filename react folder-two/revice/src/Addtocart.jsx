import React, { useReducer } from 'react'

const int = [
    {
        productname: "kaaju",
        baseprice: 80,
        price: 80,
        qun: 1,
        gram: "in one pakage 100 grams"
    },
    {
        productname: "oil",
        baseprice: 50,
        price: 80,
        qun: 1,
        gram: "in one pakage 100 litre"
    }
]

const fun = (state = int, action) => {
    switch (action.type) {
        case "plus":
            return state.map((item, index) => {
                if (index === action.payload) {
                    return {
                        ...item,
                        qun: item.qun + 1,
                        price: item.price + item.baseprice
                    }
                }
                return item
            });

        case "remove":
            return state.map((item, index) => {
                if (index === action.payload) {
                    if (item.qun > 1) {
                        return {
                            ...item,
                            qun: item.qun - 1,
                            price: item.price - item.baseprice
                        }
                    }
                }
                return item
            });

        default: return state
    }
}

function Addtocart() {

    const [card, dispatcher] = useReducer(fun, int)

    const addtocart = (index) => {
        dispatcher({ type: "plus", payload: index })
    }

    const remove = (index) => {
        dispatcher({ type: "remove", payload: index })
    }

    return (
        <div>
            <ul>
                {card.map((item, index) => (
                    <li key={index}>
                        {item.gram}, ₹{item.price}, Qty: {item.qun}, {item.productname}
                        <button onClick={() => addtocart(index)} style={{ marginLeft: '10px', padding: "1px 20px" }}>
                            +
                        </button>
                        <button onClick={() => remove(index)} style={{ marginLeft: '10px', padding: "1px 20px" }}>
                            --
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Addtocart
