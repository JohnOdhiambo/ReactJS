//Keys in mapping arrays
//Keys help React to identify items which have changed, added, or removed.
//Keys should be given to the elements inside the array to give the elements a stable identity and it should be unique.
import React from 'react'
import ReactDOM from 'react-dom'

const dogs = [
    { breed : 'Bulldog', origin : 'USA'},
    { breed : 'German Shepherd', origin : 'German'},
    { breed : 'Japanese Spikes', origin : 'Japan'}
]
//Dog Component
const Dog = ({ dog: {breed, origin} }) => {
    return(
        <div>
            <h1>{breed}</h1>
            <h2>{origin}</h2>
        </div>
    )
}
//Dogs Component
const Dogs = ({ dogs }) => {
    const dogsList = dogs.map((dog) => (
        <Dog key={dog.breed} dog={dog} />
    ))
    return(
        <div>{dogsList}</div>
    ) 
}

const App = () => (
    <div className='app'>
        <div>
            <h1>List of Dogs</h1>
            <Dogs dogs={dogs}/>
        </div>
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)