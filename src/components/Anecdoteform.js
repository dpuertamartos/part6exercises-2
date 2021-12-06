import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeThenRemoveNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        dispatch(changeThenRemoveNotification(`You created "${event.target.anecdote.value}"`, 5))
        event.target.anecdote.value = ""
      }

    return(
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
        </div>
    )
}

export default NewAnecdote