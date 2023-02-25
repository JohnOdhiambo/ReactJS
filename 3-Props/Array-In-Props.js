//Array props type
import React from 'react'
import ReactDOM from 'react-dom'
//Skills Component
const Skills = (props) => {
    //modify the skills array
    const skillset = props.skills.map((skill) => <li>{skill}</li>)
    return <ul>{skillset}</ul>
}
const App = () => (
    <div className='app'>
        <Skills skills = {['HTML', 'CSS', 'JS']} />
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
