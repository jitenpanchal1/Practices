import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const Cartslice = createSlice(
    {
        name: "Add_to_cart",
        initialState,
        reducers: {
            Addtocart: (state, action) => {
                const item = action.payload
                const match = state.cart.find(p => p.id === item.id)
                if (!match) {
                    state.cart.push({ ...item })
                }
            },

            Plus: (state, action) => {
                state.cart = state.cart.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            qty: item.qty + 1,
                            price: item.price + item.baseprice
                        }
                    }
                    return item;
                })
            },

            Minus: (state, action) => {
                state.cart = state.cart.map((item) => {
                    if (item.qty > 1 && item.id === action.payload) {
                        return {
                            ...item,
                            qty: item.qty - 1,
                            price: item.price - item.baseprice
                        }
                    } else {
                        return {
                            ...item,
                            qty: item.qty = 1,
                            price: item.price
                        }
                    }
                    return item;
                })
            },
            Remove: (state, action) => {
                state.cart = state.cart.filter(item => item.id !== action.payload)
            }
        }
    }
)

export const { Addtocart, Remove, Plus, Minus } = Cartslice.actions
export default Cartslice.reducer