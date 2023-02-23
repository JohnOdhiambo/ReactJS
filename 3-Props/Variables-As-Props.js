//It is recommended to use variables as props in order to apply some logic
//as opposed to how the value of the props are written statically when using strings
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
const App = () => {
    const welcome = 'Welcome Jay'
    const title = 'Learn React JS'
    const firstName = 'John'
    const lastName = 'Doe'
    const date = '23rd Feb 2023'

    return(
        <div className='app'>
            <Header 
                welcome={welcome}
                title={title}
                firstName={firstName}
                lastName={lastName}
                date={date}           
            />
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)