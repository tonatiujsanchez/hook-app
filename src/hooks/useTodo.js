import { useEffect, useReducer } from "react"

import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todoReducer')) || []
}


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

    useEffect(()=> {
        localStorage.setItem( 'todoReducer', JSON.stringify(todos) )
    },[todos])


    const handleNewTodo = ( todo ) => {
        dispatch({type:'[TODO] - Add Todo', payload: todo})
    }

    const handleRemoveTodo = ( idTodo ) => {
        dispatch({type:'[TODO] - Remove Todo', payload: idTodo})
    }

    const handleToggleTodo = ( idTodo ) => {
        dispatch({type:'[TODO] - Toggle Todo', payload: idTodo})
    }

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(t=> !t.done).length,
        todosCompletedCount: todos.filter(t=> t.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
