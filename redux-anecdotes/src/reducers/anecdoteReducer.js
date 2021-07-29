import aneService from '../services/anecdotes'

const aneReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.data
      const addVote = state.find(n => n.id === id)
      const changeVote = {
        ...addVote,
        votes: addVote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changeVote)
    }
    case 'NEW_ANE': {
      return state.concat(action.data)
    }
    case 'INIT_ANE':
      return action.data

  }
  return state
}
export const newAnecdote = (ane) => {
  return async dispatch => {
    const newAne = await aneService.createNew(ane)
    dispatch({
      type: 'NEW_ANE',
      data: newAne
    })
  }
}


export const votes = (ane) => {
  return async dispatch => {
    const newVote = await aneService.newVote(ane)
    dispatch({
      type: 'VOTE',
      data: newVote.id
    })

  }
}
export const initializeAne = () => {
  return async dispatch => {
    const ane = await aneService.getAll()
    dispatch({
      type: 'INIT_ANE',
      data: ane
    })
  }
}

export default aneReducer