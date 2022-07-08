export default function visibilityFilter(state=0, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return state+1
        case 'SET_VISIBILITY':
            return  state+2
        default:
            return state
    }
}
