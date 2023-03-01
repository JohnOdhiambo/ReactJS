//Methods in Class based Components
//Methods arre mostly written in parent component then passed to the child components
import React from 'react'
import ReactDOM from 'react-dom'
//User Component
const User  = ({ user : {firstName, lastName}}) => (
    <div className='user'>
        <h2>{firstName} {lastName}</h2>
    </div>
)
//Button Component
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
const Button = (text, onCLick, style) => (
    <button style={style} onClick={onCLick}>
        {text}
    </button>
)
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            welcome,
            title,
            author : {firstName, lastName},
            date
        } = this.props.data
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <p>{firstName} {lastName}</p>
                    <small>{date}</small>
                </div>
            </header>
            )
    }
}
//SkillsList Component
class SkillList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
            const {skills} = this.props
            const skillsFormatted = skills.map((skill) => <li key={skil}>skill</li>)
            return skillsFormatted        
    }
}
//Main Component 
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Lets do React Components</p>
                    <ul>SkillList</ul>
                    <User user={this.props.user}/>
                    <Button  text='Hey Guys' onCLick={this.props.greetPeople} style={buttonStyles}/>
                    <Button text='Display time' onCLick={this.props.showTime} style={buttonStyles}/>
                </div>
            </main>
        )
    }
}
//Footer Component
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {this.props.data.getFullYear()}</p>
                </div>
            </footer>
        )
    }
}
//App Component
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    showDate = (time) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = months[time.getMonth()].slice(0,)
        const year = time.getFullYear()
        const date = time.getDate()
        return `${month} ${date}, ${year}`
    }
    handleTime = () => {
        alert(this.showDate(new Date()))
    }
    greetPeople = () => {
        alert('Its nice to have you guys')
    }
    render() {
        const data = {
            welcome : 'Welcome to React Jay',
            title : 'Learning React',
            author : {
                firstName : 'John',
                lastName : 'Doe'
            },
            data : new Date()
        }
        const skills = ['C#', 'MYSQL', 'JS']

        const user = { ...data.author }

        return (
            <div className='app'>
                <Header data={data}/>
                <Main 
                    user={user}
                    skills={skills}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                />
                <Footer date ={new Date()}/>
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
