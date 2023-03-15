import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en el useForm', () => {

    const intialData = {
        name: 'Brandon',
        email: 'brantiago@gmail.com'
    }
    
    test('Debe de regresar los valores por defecto', () => {

        const { result } = renderHook( ()=> useForm(intialData) )


        expect( result.current.formState ).toEqual( intialData )

        expect( result.current ).toEqual(    {
            name: intialData.name,
            email: intialData.email,
            formState: intialData,
            onInputChange: expect.any( Function ),       
            onResetForm: expect.any( Function )
        })

    })


    test('Debe de cambiar el nombre en el formulario', () => {

        const newValue = 'Santiago'

        const { result } = renderHook( ()=> useForm(intialData) )
        const { onInputChange } = result.current

        act(()=>{
            onInputChange( { target:{ name: 'name', value: newValue } } )
        })


        expect( result.current.name ).toBe(newValue)
        expect( result.current.formState.name ).toEqual(newValue)

    })


    test('Debe de cambiar el nombre en el formulario', () => {

        const newValue = 'Santiago'

        const { result } = renderHook( ()=> useForm(intialData) )
        const { onInputChange, onResetForm } = result.current

        act(()=>{
            onInputChange( { target:{ name: 'name', value: newValue } } )
            onResetForm()
        })


        expect( result.current.name ).toBe(intialData.name)
        expect( result.current.formState.name ).toEqual(intialData.name)

    })
})