import { createSlice } from "@reduxjs/toolkit";

const AddtocartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        add: (state, action) => {
            const item = action.payload
            const find = (state.cart.find(prod => prod.id === item.id))
            if (!find) {
                state.cart.push({ ...item })
            }
        },

        plus: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        qty: item.qty + 1,
                        price: item.price + item.baseprice
                    }
                }
                return item
            })
        },

        minus: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    if (item.qty > 1) {
                        return {
                            ...item,
                            qty: item.qty - 1,
                            price: item.price - item.baseprice
                        }
                    }
                }
                return item
            })
        },

        remove: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove, plus, minus } = AddtocartSlice.actions

export default AddtocartSlice.reducer