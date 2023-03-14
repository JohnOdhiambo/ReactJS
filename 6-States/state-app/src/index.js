import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Function to show date
const showDate = (time) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = months[time.getMonth()].slice(0,)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date}, ${year}`
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

//Header Component
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.data)
    const {
      welcome ,
      title ,
      author : { firstName , lastName },
      date 
    } = this.props.data
    return (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h1>{title}</h1>
            <p>{firstName} {lastName}</p>
            <small>{showDate(date)}</small>
          </div>
        </header>
      )
  }
}
//Count component
const Count = ({count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='Add One' onClick={addOne} style={buttonStyles} />
      <Button text='Minus One' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)
//Skills Component
class SkillsList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {skills} = this.props
    const skillsList = skills.map((skill) => <li key={skill}>{skill}</li>)
    return skillsList
  }
}
//Main Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      skills,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne
    } = this.props

    return (
      <main>
        <div className='main-wrapper'>
          <p>Lets keep going with React</p>
          <ul><SkillsList skills={skills}/></ul>
          <User user={user}/>
          <Button text='Hey Guys' onClick={greetPeople} style={buttonStyles}/>
          <Button text='Display Time' onClick={handleTime} style={buttonStyles}/>
          <Button text='Change Background' onClick={changeBackground} style={buttonStyles} />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
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
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
//App Component
class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
  showDate = (time) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[time.getMonth()].slice(0,)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count -1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count -1})
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Nice to have you guys')
  }
  changeBackground = () => {}
  render () {
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

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main 
          user={user}
          skills={skills}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.count.state}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
