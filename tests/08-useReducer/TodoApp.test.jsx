import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')


describe('Pruebas en el TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Priedra del Alma', done: false },
            { id: 2, description: 'Priedra del Poder', done: true },
            { id: 3, description: 'Priedra del Mente', done: false }
        ],
        todosCount: 2,
        todosCompletedCount: 1,
        todosPendingCount: 2, 
        handleNewTodo: jest.fn(), 
        handleRemoveTodo: jest.fn(), 
        handleToggleTodo: jest.fn() 
    })




    test('Debe de mostrarse correctamente', () => {

        render( <TodoApp /> )

        const todoAlma = screen.getByText('Priedra del Alma')
        const todoPoder = screen.getByText('Priedra del Poder')
        const texbox = screen.getByRole('textbox')

        expect( todoAlma ).toBeTruthy() 
        expect( todoPoder ).toBeTruthy()
        expect( texbox ).toBeTruthy()
    })

})