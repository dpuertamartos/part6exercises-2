import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store1 from './store'
import anecdoteService from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'

anecdoteService.getAll().then(anecdotes =>
    store1.dispatch(initializeAnecdotes(anecdotes))
)

ReactDOM.render(
  <Provider store={store1}>
    <App />
  </Provider>,
  document.getElementById('root')
)