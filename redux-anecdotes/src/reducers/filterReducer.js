const initState = ''
const filterReducer = (state = initState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type){
        case 'FILTER': {
            const newFilter = action.data
            return newFilter
        }
    }
    return state
}
export const filterChange = (value) => {
    return{
        type: 'FILTER',
        data: value
    }
}
export default filterReducer