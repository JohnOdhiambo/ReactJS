//Using if-else statement
import React from 'react'
import ReactDOM from 'react-dom'

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

class App extends React.Component {
    state = {
        loggedin : false,
    }
    render () {
        const data = {
            welcome: 'Learning React',
            title: 'Lets keep going',
            author: {
              firstName: 'Jay',
              lastName: 'Doe',
            },
            date: 'Mar 14, 2023',
          }
          //conditional rendering using if...else
          let status 

          if (this.state.loggedin) {
            status = <h1>Lets Keep going Jay</h1>
          } else {
            status = <h2>Kindly login</h2>
          }

        return (
            <div className='app'>
                <Header data={data} />
                {status}
            </div>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)