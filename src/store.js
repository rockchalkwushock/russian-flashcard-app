import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducer = () => {}

export default createStore(reducer, applyMiddleware(thunk))
