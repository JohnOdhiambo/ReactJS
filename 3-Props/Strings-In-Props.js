//String props type
import React from 'react'
import ReactDOM from 'react-dom'
//Header Component
const Header = (props) => {
    console.log(props)
    return(
        <header>
            <div className='header-wrapper'>
                <h1>{props.welcome}</h1>
                <h2>{props.title}</h2>
                <p>{props.firstName} {props.lastName}</p>
                <small>{props.date}</small>
            </div>
        </header>
    )
}
//The App/ parent Component
//Functional Component
const App = () => (
    <div className='app'>
        <Header 
            welcome = 'Welcome Jay'
            title = 'Learn React JS'
            firstName = 'John'
            lastName = 'Doe'
            date = '23rd Feb 2023'
        />
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


//The following will display on browser console
// {
//     welcome = 'Welcome Jay'
//     title = 'Learn React JS'
//     firstName = 'John'
//     lastName = 'Doe'
//     date = '23rd Feb 2023'
// }