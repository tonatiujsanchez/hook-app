import { useContext } from "react"
import { UserContext } from "./context/UserContext";



export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext )



    return (
        <div>
            <h1>LoginPage</h1>
            <pre aria-label="pre">
                { JSON.stringify( user ) }
            </pre>

            <button 
                onClick={()=> setUser({
                    id: '123ABC',
                    name: 'Ton. J.',
                    email: 'tonj@gmail.com' 
                })} 
                className="btn btn-dark"
            >
                Set user
            </button>
        </div>
    )
}
