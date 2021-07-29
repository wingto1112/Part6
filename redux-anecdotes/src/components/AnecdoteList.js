import React from 'react'
import { connect } from 'react-redux'
//import { useSelector, useDispatch } from 'react-redux'
import { votes } from '../reducers/anecdoteReducer'
import { setNoti } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  //const anecdotes2 = useSelector(state => state.anecdote)
  //const filter2 = useSelector(s => s.filter)
  //const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    //dispatch(votes(anecdote))
    //dispatch(setNoti(`you voted '${anecdote.content}'`, 5))
    props.votes(anecdote)
    props.setNoti(`you voted '${anecdote.content}'`, 5)
  }
  return (
    <>
      {props.anecdote.filter(n => n.content.includes(props.filter)).sort((a, b) => { return b.votes - a.votes }).map(anecdote =>
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
const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    filter: state.filter
  }
}


export default connect(
  mapStateToProps, { votes, setNoti }
)(AnecdoteList)