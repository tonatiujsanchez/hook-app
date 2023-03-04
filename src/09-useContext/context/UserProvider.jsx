import { useState } from "react"
import { UserContext } from "./UserContext"



export const UserProvider = ({ children }) => {
    
    // const user = {
    //     id: '123ABC',
    //     name: 'Ton. J.',
    //     email: 'tonj@gmail.com',
    // }

    const [user, setUser] = useState()


    // const handleSetUser = () => {
    //     setUser()
    // }

    
    return (
        <UserContext.Provider
            value={{
                hola: 'mundo desde UserProvider',
                user,
                setUser
            }}
        >
            { children }
        </UserContext.Provider>
    )
}
