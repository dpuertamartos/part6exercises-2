import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVoteOf } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
    const vote = (id, content) => {
      console.log('vote', id)
      dispatch(addVoteOf(id))
      dispatch(changeNotification(`You voted '${content}'`))
      setTimeout(() => {
        dispatch(changeNotification(""))
      }, 5000)
    }
  
    function compare(a,b) {
      if (a.votes > b.votes) return -1;
      if (b.votes > a.votes) return 1;
  
      return 0;
    }
  
    const sortedAnecdotes = anecdotes.sort(compare)
  
    return (
      <div>
        <h2>Anecdotes</h2>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default AnecdoteList