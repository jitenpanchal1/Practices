import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 0,
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1
            state.data += 1
        },
        decrement: (state) => {
            state.value -= 1
            state.data -= 1

        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
            state.data += action.payload
        },
        reset: (state) => {
            state.value = 0
            state.data = 0
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer