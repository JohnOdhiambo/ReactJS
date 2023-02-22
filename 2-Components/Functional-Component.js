//Create a Functional React Component
// React component syntax. It can be arrow function, function declaration or function expression

//JSX Element
const header = (
    <header style={headerStyles}>
        <div className='header-wrapper'>
            <h1>Welcome Jay</h1>
            <p>Here is your code</p>
        </div>
    </header>
)
//React Component
const Header = () => {
    return header
}
//One can also return the JSX
const Header2 = () => {
    return (
        <header style={heeaderStyles}>
        <div className='header-wrapper'>
            <h1>Welcome Jay</h1>
            <p>Here is your code</p>
        </div>
    </header>
    )
}
//One can also explicitly return the JSX
const Header3 = () => (
    <header style={heeaderStyles}>
        <div className='header-wrapper'>
            <h1>Welcome Jay</h1>
            <p>Here is your code</p>
        </div>
    </header>
)