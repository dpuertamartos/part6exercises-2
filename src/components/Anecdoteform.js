import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { ChangeThenRemoveNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        props.createAnecdote(content)
        props.changeThenRemoveNotification(`You created "${event.target.anecdote.value}"`, 5)
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

const mapDispatchToProps = {
  createAnecdote, ChangeThenRemoveNotification
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const ConnectedNewAnecdote = connect(mapStateToProps, mapDispatchToProps)(NewAnecdote)

export default ConnectedNewAnecdote