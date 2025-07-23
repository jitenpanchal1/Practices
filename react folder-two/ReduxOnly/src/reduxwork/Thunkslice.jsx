import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchpro = createAsyncThunk("fetchproduct", async () => {
    const leenk = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await leenk.json()
    return data
})

const ThunkSlice = createSlice({
    name: "product",
    initialState: {
        Product: [],
        Loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchpro.pending, (state) => {
                state.error = false;
                state.Loading = true
            })
            .addCase(fetchpro.fulfilled, (state, action) => {
                state.Loading = false;
                state.Product = action.payload
            })
            .addCase(fetchpro.rejected, (state) => {
                state.Loading = false;
                state.error = state.error.message
            })
    }
});


export default ThunkSlice.reducer