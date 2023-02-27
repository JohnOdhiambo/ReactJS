//Mapping Array of arrays
import React from 'react'
import ReactDOM from 'react-dom'

const careers = [
    ['SoftwareDev', 1],
    ['ProjectManager', 2],
    ['QualityAssurance', 3]
    ['UI/UX', 4]
]
//Career Component
const Career = ({ career: [tech, level] }) => (
    <li>{tech} {level}</li>
)
//Careers Component
const Careers = ({ careers }) => {
    const careersList = careers.map((career) => <Career career={career} />) 
    alert(careersList)
    return<ul>{careersList}</ul>
}

const App = () => {
    return (
        <div className='app'>
            <div>
                <h1>Career Level</h1>
                <Careers careers={careers}/>
            </div>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)