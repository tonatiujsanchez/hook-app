import React from "react"


export const Small = React.memo(({ value }) => {

    console.log('SMAL: Me volvi a dibujar 😑')

    

    return (
        <strong>{ value }</strong>
    )
})
