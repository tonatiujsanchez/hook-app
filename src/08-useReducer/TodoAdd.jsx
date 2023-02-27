import { useForm } from '../hooks'


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })


    const onFormSubmit = (ev) => {
        ev.preventDefault()

        if (description.trim() === '') { return }

        const newTodo = {
            id: new Date().getTime() * 2,
            description,
            done: false
        }

        onNewTodo( newTodo )
        onResetForm()
    }


    return (
        <form onSubmit={onFormSubmit} className="d-grid gap-3">
            <input
                type="text"
                name="description"
                value={description}
                onChange={ onInputChange }
                placeholder="¿Que hay que hacer?"
                className="form-control"
            />
            <button
                type="submit"
                className="btn btn-outline-success mx-0"
            >
                Agregar
            </button>
        </form>
    )
}
