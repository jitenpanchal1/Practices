import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: (state) => {
            state.value + 1
        }
    }
})

export const { incremented, decremented } = cart.actions

export default cart.reducer

