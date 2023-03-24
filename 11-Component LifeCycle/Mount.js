//Its the process of mounting, updating and destroying a component in a React application.
//In React component, a component can be mounted or rendered the first time, 
//can be updated by changing the data and also can be destroyed whenever it is not needed
//The main phases are mounting, updating and unmounting
//Mounting - Rendering or putting React component into the DOM
//Updating - After mounting on the DOM, it can be updated when a state or props change. 
//Unmounting -  Removes component from the DOM. The componentWillUnmount method is the only built-in method that gets called
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props){
        super(props)
        console.log('Constructor will be the first to run')
        this.state = {
            firstName: ''
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps will be the second to run')
        return null;
    }
    componentDidMount() {
        console.log('This will be the last to run')
    }
    render() {
        console.log('render will be the third to run')
        return(
            <div className='App'>
                <p>React Component Life Cycle</p>
            </div>
        )
    }
}

const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)