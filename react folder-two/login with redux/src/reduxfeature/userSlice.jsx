import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const usersignup = createAsyncThunk("add/user", async (userdata) => {
    const exist = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userdata)
    })
    if (!exist.ok) {
        throw new Error("Failed to signup")
    }
})

const authslice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        error: null,
        suc: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(usersignup.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(usersignup.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(usersignup.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.suc = true
                state.data = action.payload
            })
    }
})

export default authslice.reducer