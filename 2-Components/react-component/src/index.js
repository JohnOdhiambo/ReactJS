//How to Render React Components
import React from 'react'
import ReactDOM from 'react-dom'
//Styling
const headerStyles = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
  }

//Header Component
const Header = () => (
    <header style={headerStyles}>
        <div className='header-wrapper'>
            <h1>Welcome Jay</h1>
            <h2>Lets get going with React</h2>
            <small>22nd Feb 2023</small>
        </div>
    </header>
)
//User Card Component
const UserCard = () => (
    <div className='user-card'>
        <h2>Jay</h2>
    </div>
)
//TechSkills Component
const TechSkills = () => {
    const techs = ['HTML', 'Javascript', 'CSS']
    const techFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techFormatted
}
//Button Component
const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0',
    border: 'none',
    borderRadius: 5,
  }
const Button = () => (
    <button style={buttonStyles}> Button action </button>
)
//Main Component
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>Getting started with React Components</p>
            <ul>
                <TechSkills />
            </ul>
            <UserCard />
        </div>
    </main>
)
//Footer Component
const Footer = () => (
    <footer style={headerStyles}>
        <div className='footer-wrapper'>
            <p>Copyright 2023@jay</p>
        </div>
    </footer>
)
//The App or Container Component
const App = () => (
    <div className='app'>
        <Header />
        <Main />
        <Button/>
        <Footer />
        
    </div>
)

const rootElement = document.getElementById('root')
//Render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)