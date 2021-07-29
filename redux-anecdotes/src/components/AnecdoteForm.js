import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNoti } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const newAne = async (e) => {
        e.preventDefault()
        const content = e.target.ane.value
        e.target.ane.value = ''
        //dispatch(newAnecdote(content))
        //dispatch(setNoti(`you added '${content}'`, 5))
        props.newAnecdote(content)
        props.setNoti(`you added '${content}'`, 5)
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

export default connect(
    null,
    { newAnecdote, setNoti }
)(AnecdoteForm)