//Convert Functional components to Class based components
import React from 'react'
import ReactDOM from 'react-dom'

//SkillsList Component ; Functional Component
const SkillsList = () => {
    const skills = ['C#', 'MySQL', 'JS']
    const skillsFormatted = skills.map((skill) => <li key={skill}>skill</li>)
    return skillsFormatted
}
//SkillsList Component ; Class based Component
class SkillList extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        const skills = ['C#', 'MySQL', 'JS']
        const skillsFormatted = skills.map((skill) => <li key={skill}>skill</li>)
        return skillsFormatted
    }
}

//Main Component ; Functional Component
const Mains = () => (
    <main>
        <div className='main-wrapper'>
            <p>Lets do React Components</p>
            <ul>SkillList</ul>
        </div>
    </main>
)
//Main Component ; Class based Component
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

//Footer Component ; functional Component
const Footers = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2023</p>
        </div>
    </footer>
)
//Footer Component ; Class based Component
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
        <footer>
            <div className='footer-wrapper'>
                <p>Copyright 2023</p>
            </div>
        </footer>
        )
    }
}

//App Component ; FUnctional Component
const Apps = () => (
    <div className='app'>
        <SkillList />
        <Main />
        <Footer />
    </div>
)
//App Component ; Class based Component
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <SkillList />
                <Main />
                <Footer />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)