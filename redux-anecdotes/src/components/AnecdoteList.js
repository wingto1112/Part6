import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votes } from '../reducers/anecdoteReducer'
import { voteNoti, zero } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes2 = useSelector(state => state.anecdote)
  const filter2 = useSelector(s => s.filter)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(votes(anecdote.id))
    dispatch(voteNoti(anecdote.content))
    setTimeout(() => dispatch(zero()), 5000)
  }
  return (
    <>
      {anecdotes2.filter(n => n.content.includes(filter2)).sort((a, b) => { return b.votes - a.votes }).map(anecdote =>
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
    </>
  )
}

export default AnecdoteList