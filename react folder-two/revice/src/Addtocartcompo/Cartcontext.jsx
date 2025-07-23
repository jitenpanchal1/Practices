import React, { useContext, useReducer } from 'react'
import data from './Creatcontext'

const int = []

const fun = (state, action) => {
    switch (action.type) {
        case "Add":
            const index = state.findIndex(item => item.id === action.payload.id)
            if (index >= 0) {
                const update = [...state]
                const item = update[index]
                const New = item.qty = 1
                update[index] = {
                    ...item,
                    qty: New,
                    price: New * item.baseprice
                }
                return update
            } else {
                return [...state,
                {
                    ...action.payload,
                    qty: 1,
                    baseprice: action.payload.price,
                    price: action.payload.price
                }]
            }
        case "remove":
            return state.filter(item => item.id !== action.payload)

        case "upqu":
            return state.map(item => {
                if (item.id === action.payload) {
                    const Nex = item.qty + 1
                    return {
                        ...item,
                        qty: Nex,
                        price: Nex * item.baseprice
                    }
                }
                return item
            })

        case "dqu":
            return state.map(item => {
                if (item.id === action.payload) {
                    if (item.qty > 1) {
                        const Nex = item.qty - 1
                        return {
                            ...item,
                            qty: Nex,
                            price: Nex * item.baseprice
                        }
                    }

                }
                return item
            })

        default: return state
    }
}

export const Cartcontext = ({ children }) => {

    const [cart, dispacher] = useReducer(fun, int)

    return (
        <data.Provider value={{ cart, dispacher }}>
            {children}
        </data.Provider>
    )
}


export const useCart = () => useContext(data)
