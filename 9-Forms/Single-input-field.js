//Forms in ReactJS
//Form is used to collect data from a user such as during sign up, sign or
//There are various form fields such as text, email, password, date, radio button, option selection and text area.
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  // declaring state
  state = {
    message : ''
  }
  handleChange = e => {
    const value = e.target.value
    this.setState({ message: value })
  }

  render() {
    // accessing the state value
    const message = this.state.message
    return (
      <div className='App'>
        <input
          type='text'
          name='message'
          placeholder='Your Message Jay'
          value={message}
          onChange={this.handleChange}
        />
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

const root = document.querySelector('.root')
ReactDOM.render(<App />, root)