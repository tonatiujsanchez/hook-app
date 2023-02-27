import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos=[], onRemoveTodo, onToggleTodo }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={ todo } 
                        onRemoveTodo={ onRemoveTodo }
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
        </ul>
    )
}
