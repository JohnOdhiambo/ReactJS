//Class/Stateful Component
//Class based component is made using JavaScript class and it inherits from react Component.
//it is a child of React Component and has a built-in render method;may have a constructor
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
    //Optional to have a constructor
    constructor(props) {
        //Code inside the constructor is executed first
        super(props)
    }
    render() {
        return(
            <header>
                <div className='header-wwrapper'>
                    <h1>Welcome Jay</h1>
                    <h2>Class based React Component</h2>
                    <small>28th Feb 2023</small>
                </div>
            </header>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)

