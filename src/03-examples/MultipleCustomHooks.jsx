import { useCounter, useFetch } from "../hooks"
import { Loading, CardCharacter } from "./"



export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)

    return (
        <div>
            <h1>RickAndMorty - Quotes </h1>
            <hr />
            {
                isLoading
                    ? (
                        <Loading />
                    ) : (
                        <>
                            <CardCharacter character={ data } id={ counter } />
                            <button 
                                onClick={ ()=> increment() }
                                className="btn btn-primary"
                            >
                                Next character
                            </button>
                        </>
                    )
            }
        </div>
    )
}
