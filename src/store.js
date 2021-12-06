import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducerFinal = combineReducers({
    anecdotes: reducer,
    notifications: notificationReducer,
    filter: filterReducer
})

const store1 = createStore(reducerFinal)

export default store1