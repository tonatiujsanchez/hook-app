const { render, screen, fireEvent } = require("@testing-library/react")
const { UserContext } = require("../../src/09-useContext/context/UserContext")
const { LoginPage } = require("../../src/09-useContext/LoginPage")


describe('Pruebas en el componente LoginPage', () => {

    const user = {
        id: '123ABC',
        name: 'Ton. J.',
        email: 'tonj@gmail.com' 
    }

    const setUserMock = jest.fn()



    test('Debe de mostrarse correctamente sin el usuario', () => {

        render(
            <UserContext.Provider
                value={{ user: null }}
            >
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        
        expect( preTag.innerHTML ).toBe( 'null' )
    })


    
    test('Debe de llamar setUser cuando se hace click en el boton', () => {

        render(
            <UserContext.Provider
                value={{ user: null, setUser: setUserMock }}
            >
                <LoginPage />
            </UserContext.Provider>
        )

        const buttonSetUser = screen.getByRole('button')

        fireEvent.click( buttonSetUser )

        expect( setUserMock ).toHaveBeenCalled()
        expect( setUserMock ).toHaveBeenCalledWith(user)
    })

})