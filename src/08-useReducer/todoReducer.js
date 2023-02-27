



export const todoReducer = ( initalSate = [], action ) => {

    switch (action.type) {
        
        case '[TODO] - Add Todo':
            return [  ...initalSate, action.payload ]
    
        case '[TODO] - Remove Todo':
            return initalSate.filter( todo => todo.id !== action.payload )
    
        case '[TODO] - Toggle Todo':
            return initalSate.map( todo => todo.id === action.payload ? ({ ...todo, done: !todo.done }) : todo )
    
        default:
            return initalSate
    }
    
}