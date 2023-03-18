


export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {

    
    return (
        <li 
            onClick={ ()=>onToggleTodo( todo.id ) }
            className="list-group-item d-flex justify-content-between align-items-center pointer"
        >
            <span aria-label="span" className={ todo.done ? 'text-decoration-line-through text-secondary' : '' }>
                { todo.description }
            </span>
            <button 
                onClick={ ()=> onRemoveTodo ( todo.id ) } 
                className="btn btn-danger">
                    Borrar
            </button>
        </li>
    )
}
