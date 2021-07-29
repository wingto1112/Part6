const initState = ''
const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FILTER': return action.data
    }
    return state
}
export const filterChange = (value) => {
    return {
        type: 'FILTER',
        data: value
    }
}
export default filterReducer