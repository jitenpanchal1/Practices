import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {

    }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})