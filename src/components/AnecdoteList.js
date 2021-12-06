import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVoteOf } from '../reducers/anecdoteReducer'
import { ChangeThenRemoveNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
    const notification = useSelector(({notifications})=> {return notifications.id})
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if ( filter === '' ) {
          return anecdotes
        }
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      })
    const dispatch = useDispatch()
  
    const vote = (anecdote) => {
      console.log('vote', anecdote.id)
      dispatch(addVoteOf(anecdote))
      console.log('clearing', notification)
      clearTimeout(notification)
      dispatch(ChangeThenRemoveNotification(`you voted ${anecdote.content}`, 5))
    }
  
    function compare(a,b) {
      if (a.votes > b.votes) return -1;
      if (b.votes > a.votes) return 1;
  
      return 0;
    }
  
    const sortedAnecdotes = anecdotes.sort(compare)
  
    return (
      <div>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default AnecdoteList