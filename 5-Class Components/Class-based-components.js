//Class based Components
import { exact } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

//Header Component
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>Welcome</h1>
                    <h2>Lets continue making progress</h2>
                    <p>28th Feb 2023</p>
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
            const skills = ['C#', 'MYSQL', 'JS']
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
                </div>
            </main>
        )
    }
}
//Footer Component
class Footer extends  React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright 2023</p>
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
    render() {
        return (
            <div className='app'>
                <SkillList />
                <Main />
                <Footer />
            </div>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)