import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en el componente MainApp', () => {

    test('Debe de mostrarse correctamente', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter> 
        )

        screen.debug()

        expect( screen.getByText('HomePage -') ).toBeTruthy()
    })



    test('Debe de mostrarse el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter> 
        )

        screen.debug()

        expect( screen.getByText('LoginPage') ).toBeTruthy()
    })

})