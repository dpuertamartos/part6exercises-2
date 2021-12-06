import React from 'react'
import NewAnecdote from './components/Anecdoteform'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App