//Resetting a state using a method
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {
        count :0
    }
    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }
    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        const count = this.state.count
        return (
            <div className='app'>
                <h1>{count}</h1>
                <div>
                    <button className='btn btn-add' onClick={this.addOne}>Add One</button>
                    <button className='btn btn-minus' onClick={this.minusOne}>Minus One</button>
                </div>
            </div>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)