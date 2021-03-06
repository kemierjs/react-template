export default function todos(state = [], action) {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
