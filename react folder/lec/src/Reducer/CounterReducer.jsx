const initialState = 5

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increament": return state + 1
        case "decrement": return state - 1
        default: return state
    }
}

export default countReducer