//Pass a Function as props type tp a React Component
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[time.getMonth()].slice(0,)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
}
//Button Component
const Button = (props) => 
    <button onClick={props.onClick}>{props.text}</button>
//In React, event handlers are in camelCase such as OnClick,OnMouseOver, onKeyPress unlike in HTML like onclick,onkeypress
const App = () => {
    const getTime = () => {
        alert(showDate(new Date()))
    }
    const getContent = () => {
        alert('How to implement function as object props type')
    }
    return (
        <div className='app'>
            <Button text = 'display time' onClick={getTime}/>
            <Button text = 'show content' onClick={getContent}/>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)