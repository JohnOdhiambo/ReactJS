//State is an object in which rerenders the React Component when state data changes
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {
        count : 0
    }
    render() {
        //Access the state value
        const count = this.state.count
        return(
            <div className='app'>
                <h1>{count}</h1>
            </div>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)