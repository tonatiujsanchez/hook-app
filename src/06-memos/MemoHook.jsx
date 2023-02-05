import { useMemo, useState } from "react"
import { useCounter } from "../hooks"


const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log( 'Ahí vamos...' )
    }
    return `${ iterationNumber } iteraciones realizadas`
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(true)

    const counterMemo = useMemo(() => heavyStuff( counter ), [counter])

    return (
        <div>
            <h1>Counter: <strong>{counter}</strong> </h1>
            <hr />


            <h4>{ counterMemo }</h4>

            <button
                className="btn btn-primary"
                onClick={()=> increment()}
            >
                +1
            </button>
            <button
                onClick={ ()=> setShow( !show ) } 
                className="btn btn-success"
            >
                !Show { JSON.stringify(show) }
            </button>
        </div>
    )
}
