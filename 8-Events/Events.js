//Events
//An event is an action or occurrence recognized by a software.
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    state = {
        firstName : '',
        message : '',
        key : '',
    }
    // e gives an event object
    handleClick = (e) => {
        this.setState({ message : 'Events in React JS'})
    }
    handleMouseHover = (e) => {
        this.setState({ message : 'hovering over the mouse'})
    }
    // Get value when an input field changes a value
    handleChange = (e) => {
        this.setState({ firstName: e.target.value, message: e.target.value})
    }
    // Get keyboard key code when an input field is pressed; applies with inputs and textarea
    handleKeyUp = (e) => {
        this.setState({ message: `${e.target.value} has been pressed` + e.charCode, })
    }
    // Blurring happens when a mouse leave an input field
    handleBlur = (e) => {
        this.setState({ message: 'Input field has been blurred' })
    }
  render () {
    return (
        <div>
            <h1>Events in React JS</h1>

            <button onClick={this.handleClick}>Click Here</button>
            <button onMouseMove={this.handleMouseMove}>Hover the mouse</button>

            <p>{this.state.message}</p>
            <label htmlFor=''> For onKeyUp Event: </label>
            <input type='text' onKeyUp={this.handleKeyUp} />
            <br />

            <label htmlFor=''> For onBlur Event: </label>
            <input type='text' onBlur={this.handleBlur} />

            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='firstName'>First Name: </label>
                <input
                onChange={this.handleChange}
                name='firstName'
                value={this.state.value}
                />
            </div>

            <div>
                <input type='submit' value='Submit' />
            </div>
            </form>
        </div>
    )

  }

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)