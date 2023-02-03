
import { useState } from "react"


export const useForm = ( initialValue = {} ) => {
    
    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const onResetForm = () => {
        setFormState(initialValue)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
