import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { addNoti, zero } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const newAne = (e) => {
        e.preventDefault()
        dispatch(newAnecdote(e.target.ane.value))
        dispatch(addNoti(e.target.ane.value))
        e.target.ane.value = ''
        setTimeout(() => dispatch(zero()), 5000)
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={newAne}>
                <div><input name="ane" /></div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm