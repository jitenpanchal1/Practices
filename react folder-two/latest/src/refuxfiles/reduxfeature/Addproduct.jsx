import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Addproduct = createAsyncThunk("product", async (user) => {

    const data = await fetch("http://localhost:5000/Product", {
        method: "POST",
        headers: { "content-type": "aplication/json" },
        body: JSON.stringify(user)
    })

    if (!data.ok) {
        throw new Error("data not fetching properlly")
    }

    const find = await data.json()

    if (!find) {
        throw new Error("Items not chaches")
    }

    return find
})

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: null,
        item: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(Addproduct.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(Addproduct.rejected, (state) => {
                state.loading = false,
                    state.error = true
            })
            .addCase(Addproduct.fulfilled, (state, action) => {
                const items = action.payload
                state.loading = false,
                    state.error = null,
                    state.item.push({ ...items })
            })
    }

})

export default ProductSlice.reducer