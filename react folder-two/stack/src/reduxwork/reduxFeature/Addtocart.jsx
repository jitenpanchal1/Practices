import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cart = createAsyncThunk("addtocart", async (product) => {
    const cartt = await fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    })
    if (!cartt.ok) {
        console.log(Error)
    }

    const data = await cartt.json()

    if (!data || !data.id) {
        console.log("Data not catched", Error)
    }

    return data
})

const AddproductSlice = createSlice(

    {
        name: "cart",
        initialState: {
            items: [],
            error: null
        },

        reducers: {

            plus: (state, action) => {
                const item = state.items.find(pro => pro.id === action.payload)
                if (item) {
                    item.qty += 1
                    item.total = item.qty * item.unitprice
                }
            },

            minus: (state, action) => {
                const item = state.items.find(pro => pro.id === action.payload)
                if (item && item.qty > 1) {
                    item.qty -= 1
                    item.total = item.qty * item.unitprice
                }
            },

            remove: (state, action) => {
                state.items = state.items.filter(pro => pro.id !== action.payload)
            }

        },

        extraReducers: (builder) => {
            builder
                .addCase(cart.fulfilled, (state, action) => {
                    const pro = action.payload
                    if (!pro || !pro.id) {
                        console.log("not found")
                        console.log(Error)
                        return;
                    }
                    const finde = state.items.find(product => product.id === pro.id)

                    if (finde) {
                        finde.qty += 1
                        finde.total = finde.qty * finde.unitprice
                    } else {
                        state.items.push({ ...pro, unitprice: pro.price, total: pro.price })
                    }

                })
                .addCase(cart.rejected, (state, action) => {
                    state.error = action.payload
                })
        }
    }

)
export const { plus, minus, remove } = AddproductSlice.actions
export default AddproductSlice.reducer
