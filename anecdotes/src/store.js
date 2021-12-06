import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'


const reducerFinal = combineReducers({
    anecdotes: reducer,
    notifications: notificationReducer,
    filter: filterReducer
})

const store1 = createStore(reducerFinal, composeWithDevTools(applyMiddleware(thunk)))

export default store1