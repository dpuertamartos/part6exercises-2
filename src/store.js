import { createStore } from 'redux'
import reducer from './reducers/anecdoteReducer'

const store1 = createStore(reducer)

export default store1