//Object props type
import React from 'react';
import ReactDOM from 'react-dom'

const showDate = (time) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[time.getMonth()].slice(0,)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
}
//Header Component with Header properties as objects
const Header = (props) => {
    return (
        <header>
            <div className="header-wrapper">
                <h1>{props.data.welcome}</h1>
                <h2>{props.data.title}</h2>
                <p>{props.data.author.firstName} {props.data.author.lastName}</p>
                <small>{showDate(props.data.date)}</small>
            </div>
        </header>
    )
}

const App = () => {
    const data = {
        welcome : 'Welcome to React Jay',
        title : 'Learning React',
        author : {
            firstName : 'John',
            lastName : 'Doe'
        },
        data : new Date()
    }
    return(
        <div className="app">
            <Header data = {data}/>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)