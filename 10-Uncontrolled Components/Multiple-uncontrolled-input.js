//Getting data from multiple uncontrolled inputs
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    name = React.createRef()
    nationality = React.createRef()
    occupation = React.createRef()

    handleSubmit = (e) => {
        //stops the default behavior of form element from specifically refreshing of page
        e.preventDefault()
        console.log(this.name.current.value)
        console.log(this.nationality.value)
        console.log(this.occupation.value)

        const data = {
            name : this.name.current.value,
            nationality : this.nationality.current.value,
            occupation : this.occupation.current.value,
        }
        //If exists, connect backend api to send the data to the database
        console.log(data)
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
                    <div>
                        <label htmlFor='nationality'>Nationality: </label>
                        <input type='text' id='nationality' name='nationality' placeHolder='Your Nationality:' ref={this.name} />
                        <button type='submit'> Submit</button>
                    </div>
                    <div>
                        <label htmlFor='occupation'>Occupation: </label>
                        <input type='text' id='occupation' name='occupation' placeHolder='Your Occupation:' ref={this.name} />
                        <button type='submit'> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)