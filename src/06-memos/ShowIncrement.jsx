import React from "react"


export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me voiví a generar')

    return (
        <button
            onClick={()=>{
                increment(5)
            }}
            className="btn btn-dark"
        >
            Incrementar
        </button>
    )
})
