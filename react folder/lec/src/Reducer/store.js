import { createStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./CounterReducer";

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = createStore(rootReducer);

export default store;