import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import messageReducer from "./util/slices/message";

function contactForms(state = { message: {} }, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return state.concat([action.text])
        default:
            return state
    }
}
// const store = createStore(contactForms, ['Use Redux'])
const reducer = {
    message: messageReducer
}
const store = configureStore({
    reducer: reducer,
    devTools: true,
})

// store.dispatch({
//     type: 'ADD_CONTACT',
//     text: 'Read the docs'
// })

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]

export default store;