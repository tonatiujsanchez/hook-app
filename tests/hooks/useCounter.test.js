import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 
    test('Debe de retornar los valore por defecto', () => {
        
        const { result } = renderHook( ()=> useCounter() )
        const { counter, increment, decrement, reset } = result.current

        expect( counter ).toBe(10)
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )

    })


    test('Debe de generar el counter con el valor inical de 100', () => {

        const { result } = renderHook( ()=> useCounter(100) )
        const { counter } = result.current

        expect( counter ).toBe(100)
    })
    

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( ()=> useCounter(100) )
        const { increment } = result.current

        act(() => {
            increment()
            increment(2)
        })

        expect( result.current.counter ).toBe(103)
    })

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook( ()=> useCounter(100) )
        const { decrement } = result.current

        act(() => {
            decrement()
            decrement(5)
        })

        expect( result.current.counter ).toBe(94)
    })


    test('Debe hacer el reset al valor inicial', () => {
        const { result } = renderHook( ()=> useCounter(100) )
        const { increment, reset } = result.current

        
        act(() => {
            increment()
            increment(5)
            reset()
        })

        expect( result.current.counter ).toBe(100)
    })
})