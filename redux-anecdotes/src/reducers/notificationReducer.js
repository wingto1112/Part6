let timout
const notiReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTI': return action.data
    }
    return state
}
export const setNoti = (message, time) => {
    
    return async dispatch => {
        dispatch({
            type: 'NOTI',
            data: message
        })
        clearTimeout(timout)
        timout = setTimeout(() =>
            dispatch({
                type: 'NOTI',
                data: null
            }), time * 1000)
        
    }
}

export default notiReducer