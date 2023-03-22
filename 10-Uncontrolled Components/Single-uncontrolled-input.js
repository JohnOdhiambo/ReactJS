//In an uncontrolled component, instead of writing an event handler for every state update,
//you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields
//just like traditional HTML form data handling.
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    name = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.name.current.value)
    }
    render () {
        return (
            <div className={app}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name' placeHolder='Your Name:' ref={this.name} />
                        <button type='submit'> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)