import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Allproduct = createAsyncThunk("user", async (user) => {
    const data = await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })

    if (!data.ok) {
        throw new Error("Data failed to fetch")
    }
})

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: null,
        items: []
    },

    extraReducers: (builder) => {

        builder
            .addCase(Allproduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(Allproduct.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(Allproduct.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items.push(action.payload)
            })

    }

})

export default ProductSlice.reducer