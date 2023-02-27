//Render array of objects
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
    const dogsList = dogs.map((dog) => <Dog dog={dog}/>)
    return <div>{dogsList}</div>
}
//App Component
const App = () => (
    <div className='app'>
        <div>
            <h1>List of countries</h1>
            <Dogs dogs={dogs}/>
        </div>
    </div>
)
const rootElement = document.getElementById('')
ReactDOM.render(<App />, rootElement)
