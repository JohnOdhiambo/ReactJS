import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//Styling
const headerStyles = {
  backgroundColor: '#A9A9A9',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
//Function to show date
const showDate = (time) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = months[time.getMonth()].slice(0,)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date}, ${year}`
}
//Header Component
const Header = ({
  data : {
    welcome,
    title,
    author : { firstName, lastName},
    date
  },
}) => {
  return (
    <header style={headerStyles}>
      <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h1>{title}</h1>
          <p>{firstName} {lastName}</p>
          <small>{showDate(date)}</small>
      </div>
    </header>
  )
}
//Skills Component
const SkillsList = ({skills}) => {
  const skillsList = skills.map((skill) => <li key={skill}>{skill}</li>)
  return skillsList
}
//User Component
const User = ({ user : {firstName, lastName}}) => (
  <div className='user'>
    <p>{firstName} {lastName}</p>
  </div>
)
//button style
const buttonStyles = {
  backgroundColor: '#2F4F4F',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
//Button Component
const Button = ({text, onClick, style}) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
) 
//Main Component
const Main = ({ user, skills, greetPeople, showTime}) => (
  <main>
    <div className='main-wrapper'>
      <ul><SkillsList skills={skills}/></ul>
      <User user={user}/>
      <Button text='Hey Guys' onClick={greetPeople} style={buttonStyles}/>
      <Button text='Display Time' onClick={showTime} style={buttonStyles}/>
    </div>
  </main>
)
//Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)
//App Component which is a functional component
const App = () => {
  const data = {
    welcome : 'Welcome to React Jay',
    title : 'Learning React',
    author : {
        firstName : 'John',
        lastName : 'Doe'
    },
    date : new Date()
}
  const date = new Date()
  const skills = ['C#', 'JS', 'MySQl']
  const user= { ...data.author} //copying author from data object to user variable using spread operator

  const showTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Nice to have you guys')
  }
  return (
    <div className='app'>
      <Header data={data}/>
      <Main 
        user={user}
        skills={skills}
        showTime={showTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date}/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
