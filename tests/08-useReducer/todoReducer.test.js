import { todoReducer } from "../../src/08-useReducer/todoReducer"


describe('Pruebas en el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }]



    test('Debe de regresar el estado inical', () => {

        const newState = todoReducer( initialState, {} )
        expect( newState ).toBe( initialState )
    })
  


    test('Debe de agregar un TODO', () => {

        const action = {
            type: '[TODO] - Add Todo',
            payload: {
                id: 2,
                description: 'Demo 2 todo',
                done: false,
            }
        }

        const newState = todoReducer( initialState, action )
        
        expect( newState.length ).toBe(2)
        expect( newState ).toContain( action.payload )
    })



    test('Debe de eliminar un TODO', () => {

        const action = {
            type: '[TODO] - Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )

        expect( newState.length ).toBe( 0 )
    })

    

    test('Debe de cambiar el estado del TODO', () => {

        const action = {
            type: '[TODO] - Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )

        expect( newState.find( todo => todo.id === action.payload ) ).toBeTruthy()
    })

})