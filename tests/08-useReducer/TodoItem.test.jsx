import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en el componente <TodoItem />', () => {
    
    const todo = {
        id: 1,
        description: 'Priedra del Alma',
        done: false
    }

    const onRemoveTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    // Limpia los MOCKS para poder utilizarse en la siguente prubra con su estado incial 
    beforeEach( ()=> jest.clearAllMocks() )


    test('Debe de mostrar el todo en pendiente', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onRemoveTodo={ onRemoveTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        )

        const liElement = screen.getByRole('listitem')
        console.log(liElement.innerHTML);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center pointer')


        const liSpan = screen.getByLabelText('span')
        expect(liSpan.className).toBe('')
        expect(liSpan.className).not.toContain('text-decoration-line-through text-secondary')
        
    })



    test('Debde de mosntrar el todo completado', () => {
        
        todo.done = true

        render(
            <TodoItem
                todo={ todo }
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )        

        const liSpan = screen.getByLabelText('span')
        expect( liSpan.className ).toBe('text-decoration-line-through text-secondary')
        expect( liSpan.className ).toContain('text-decoration-line-through text-secondary')
    })
    
    
    
    test('El span debe de llamar al onToggleTodo cuando se hace click', () => { 

        render(
            <TodoItem
                todo={ todo }
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )    

        const liSpan = screen.getByLabelText('span')
        
        fireEvent.click( liSpan )

        expect( onToggleTodoMock ).toHaveBeenCalled()
        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id) //Llamado con el argumento id: 1
    })


    test('El span debe de llamar al onRemoveTodo cuando se hace click', () => { 

        render(
            <TodoItem
                todo={ todo }
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )    

        const buttonRemove = screen.getByRole('button')

        fireEvent.click( buttonRemove )

        expect( onRemoveTodoMock ).toHaveBeenCalled()
        expect( onRemoveTodoMock ).toHaveBeenCalledWith( todo.id )
    })

})
