//Mapping and render an arrayb of numbers
import React from 'react'
import ReactDOM from 'react-dom'

const Digits = ({digits}) => {
    //modify the array and change the array elements to JSX element
    //to avoid the array appearing in one line
    const list = digits.map((digit) => <li>{digiit}</li>)
    return list
}

const App = () => {
    const digits = [20,20,30,40]
    return(
        <div className='app'>
            <div>
                <h1>List of digits</h1>
                <h2><Digits digits={digits} /></h2>
            </div>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)