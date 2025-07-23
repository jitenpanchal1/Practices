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

        reducers: {},

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
                    if (!finde) {
                        state.items.push({ ...pro })
                    } else {
                        console.log("item not added")
                    }
                })
                .addCase(cart.rejected, (state, action) => {
                    state.error = action.payload
                })
        }
    }

)

export default AddproductSlice.reducer