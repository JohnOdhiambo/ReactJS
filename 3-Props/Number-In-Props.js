//Number props type
import React from 'react'
import ReactDOM from 'react-dom'
//Age Component
const Age = (props) => (
    <div>
        The person is {prependOnceListener.age} years old
    </div>
)
//Distance Component
const Distance = (props) => (
    <p> The distance covered is {props.distance} kilometers</p>
)
//The App / Parent Component
//Functional Component
const App = () => {
    let currentYear = 2023
    let birthYear = 1990
    const age = currentYear - birthYear
    const speed = 10
    const time =  2

    return (
        <div>
            <Age age={age}/>
            <Distance distance={speed * time}/>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.React(<App />, rootElement)