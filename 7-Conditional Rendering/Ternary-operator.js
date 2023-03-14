//using Ternary Operator
//Ternary operator can be used inside styles, className/ many places in a component than regular if else statement.
//a condition followed by a question mark (?), 
//then an expression to execute if the condition is truthy followed by a colon (:), 
//and finally the expression to execute if the condition is falsy.
import React from 'react'
import ReactDOM from 'react-dom'

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
// CSS styles in JavaScript Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
  }

  class Header extends React.Component {
    render () {
        const {
            welcome,
            title,
            author: { firstName, lastName },
            date,
            } = this.props.data
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <p>{firstName} {lastName}</p>
                    <small>{date}</small>
                    <p>Select an option</p>
                </div>
            </header>
        )
    }
}

const Login = () => (
    <div>
        <h3>Please Login</h3>
    </div>
  )
const Welcome = (props) => (
    <div>
      <h1>Welcome back Jay</h1>
    </div>
  )

class App extends React.Component {
    state = {
      loggedIn: false,
    }
    handleLogin = () => {
      this.setState({
        loggedIn: !this.state.loggedIn,
      })
    }
  
    render() {
      const data = {
        welcome: 'Learning React',
        title: 'Lets keep going',
        author: {
          firstName: 'Jay',
          lastName: 'Doe',
        },
        date: 'Mar 14, 2023',
      }
  
      const status = this.state.loggedIn ? <Welcome /> : <Login />
  
      return (
        <div className='app'>
          <Header data={data} />
          {status}
          <Button
            text={this.state.loggedIn ? 'Logout' : 'Login'}
            style={buttonStyles}
            onClick={this.handleLogin}
          />
        </div>
      )
    }
  }
  
  const rootElement = document.getElementById('root')
  ReactDOM.render(<App />, rootElement)