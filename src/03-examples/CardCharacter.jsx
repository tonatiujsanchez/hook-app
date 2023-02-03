



export const CardCharacter = ({ character, id }) => {
    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title"> <strong>{ id }</strong>. {character.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
        </div>
    )
}
