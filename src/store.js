import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducerFinal = combineReducers({
    anecdotes: reducer,
    notifications: notificationReducer
})

const store1 = createStore(reducerFinal)

export default store1