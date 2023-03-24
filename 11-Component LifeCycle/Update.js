//An update of a React component can be caused by changes to props or state.
//These methods are called in the following order when a component is being re-rendered:
    //static getDerivedStateFromProps() - first one to be called when a component is updated
    //shouldComponentUpdate() - return a boolean. If this method does not return true the application will not update.
    //render()  
    //componentDidUpdate() - takes two parameters(prevProps and prevState) and called after the component is updated in the DOM.
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props){
        super(props)
        console.log('Constructor will be the first to run')
        this.state = {
            day : 1,
            congratulate: ''
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        console.log(nextState.day)
        if(nextState.day > 30){
            return false
        } else{
            return true
        }
    }
    doChallenge =() => {
        this.setState({
            day: this.state.day + 1,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.day == 30){
            this.setState({
                congratulate: 'Congratulations, you completed'
            })
        }
        console.log(prevState, prevProps)
    }

    render() {
        return(
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <button onClick={this.doChallenge}>Complete the Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                <h2>{this.state.congratulate}</h2>
            </div>
        )
    }
}

const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)
 