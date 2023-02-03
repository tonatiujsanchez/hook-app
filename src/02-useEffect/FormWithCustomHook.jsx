
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"




export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email   : '',
        password: ''
    })


    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input 
                type="text"
                name="username"
                value={ username }
                onChange={ onInputChange }
                placeholder="username"
                className="form-control"
            />        
            <input 
                type="email"
                name="email"
                value={ email }
                onChange={ onInputChange }
                placeholder="ejemplo@correo.com"
                className="form-control mt-2"
            />
            <input 
                type="password"
                name="password"
                value={ password }
                onChange={ onInputChange }
                placeholder="password"
                className="form-control mt-2"
            />
            <button 
                onClick={onResetForm}
                className="btn btn-success mt-2"
            >
                    Limpiar
            </button>
        </>
    )
}
