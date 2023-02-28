//Accessing props in Class Components
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <div className='header-wrapper'>
                <h1>{this.props.data.welcome}</h1>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.author.firstName} {this.props.data.lastName}</p>
                <small>{this.props.data.date}</small>
                </div>
            </header>
        )
    }
}
const App = () => {
    const data  = {
        welcome : 'Welcome Jay',
        title : 'Lets continue with props in React Components',
        author : {
            firstName : 'John',
            lastName : 'Doe'
        },
        date : 'Feb 28, 2023'
    }
    return (
        <div className='app'>
            <Header data={data}/>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)