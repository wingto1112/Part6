const init = null
const notiReducer = (state = init, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'VOTE2': {
            const voteState = `you voted '${action.data}'`
            return voteState
        }
        case 'ADD': {
            const addState = `you added '${action.data}'`
            return addState
        }
        case 'ZERO': return init
    }
    return state
}

export const voteNoti = (anecdote) => {
    return {
        type: 'VOTE2',
        data: anecdote
    }
}

export const addNoti = (addAne) => {
    return {
        type: 'ADD',
        data: addAne
    }
}

export const zero = () => {
    return {
        type: 'ZERO'
    }
}

export default notiReducer