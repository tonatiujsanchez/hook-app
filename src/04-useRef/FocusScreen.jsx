import { useRef } from "react"


export const FocusScreen = () => {


    const inputRef = useRef()

    
    const onClick = () => {
        inputRef.current.select()
    }



    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text"
                ref={ inputRef }
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button
                onClick={ onClick } 
                className="btn btn-success mt-3"
            >
                Set focus
            </button>
        </>
    )
}
