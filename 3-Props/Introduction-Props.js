//Props(keyword in React for property)
//Its used to pass data from one component to another mostly parent to child
//Instead of injecting data like using JSX, we can pass as props, which are similar to parameters in functions 
//React props is an object which one gets when you create a React component.
import React from 'react'
import ReactDOM from 'react-dom'
//Header Component
const Header = (props) => {
    console.log(props) // {welcome:'Welcome Jay'}
    return(
        <header>
            <div className='header-wrapper'>
                <h1>{[props.welcome]}</h1>
            </div>
        </header>
    )
}
//The App/ parent component
//Functional Component
const App = () => {
    return(
        <div className='app'>
            <Header welcome = 'Welcome Jay'/>
        </div>
        )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

