import { useLayoutEffect, useRef, useState } from "react"




export const CardCharacter = ({ character, id }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(()=>{

        const { width, height } = pRef.current.getBoundingClientRect()
        console.log(pRef.current.getBoundingClientRect())
        
        setBoxSize({ width, height })
        
    },[character])

    return (
        <div 
            className="card mb-3" 
            style={{ width: '18rem', display: 'flex' }}
        >
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 
                    ref={ pRef }
                    className="card-title"
                > 
                    <strong>{ id }</strong>. {character.name}
                </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><code>{ JSON.stringify(boxSize) }</code></li>
            </ul>
        </div>
    )
}
