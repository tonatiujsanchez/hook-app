

import { useTodo } from "../hooks"

import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"


export const TodoApp = () => {

    const { 
        todos,
        todosCount,
        todosCompletedCount,
        todosPendingCount, 
        handleNewTodo, 
        handleRemoveTodo, 
        handleToggleTodo 
    } = useTodo()

    return (
        <>
            <header className="d-flex justify-content-between align-items-center">
                <h1>TodoApp</h1>
                <div className="d-flex gap-3 align-items-center">
                    <p className="m-0 text-danger fw-bold">Pendientes: { todosPendingCount }</p>
                    <p className="m-0 text-success fw-bold">Completados: { todosCompletedCount }</p>
                    <p className="m-0 fw-bold text-decoration-underline">Total: { todosCount }</p>
                </div>
            </header>
            <hr />
            <div className="row container mx-auto mt-5">
                <div className="col-7">
                    {/* TodoList */}
                    <h4>TODOS</h4>
                    <hr />
                    <TodoList todos={ todos } onRemoveTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo } />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd */}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
