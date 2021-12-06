import React from 'react'
import NewAnecdote from './components/Anecdoteform'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App