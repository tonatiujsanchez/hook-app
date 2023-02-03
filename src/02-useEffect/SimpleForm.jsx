import { useEffect, useState } from "react"
import { Message } from "./Message"




export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Brandon',
        email: 'brd@gmail.com'
    })

    const { username, email } =  formState

    const onInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    useEffect(()=>{
        // console.log('useEffect called!');
    },[])
    
    useEffect(()=>{
        // console.log('formState changed..!');
    },[formState])

    useEffect(()=>{
        // console.log('email changed..!');
    },[email])

    return (
        <>
            <h1>Formulario Simple</h1>
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
            {
                username === 'Brandon2' && (
                    <Message />        
                )
            }
        </>
    )
}
