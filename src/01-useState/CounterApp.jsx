import { useState } from "react"


export const CounterApp = () => {

    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    return (
        <>
            <h1>Counter: <strong>{ counter1 }</strong></h1>
            <h1>Counter: <strong>{ counter2 }</strong></h1>
            <h1>Counter: <strong>{ counter3 }</strong></h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={()=> setCounter( ( value )=> ({ ...value, counter1: counter1 + 1 })) }
            >+1</button>
        </>
    )
}
