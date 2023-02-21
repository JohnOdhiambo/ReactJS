//Javascript Function
//A JavaScript function could be either a regular function or an arrow function
const getUserInfo = (firstName, lastName, title, country, skills) => {
    return `${firstName}, ${lastName}, a ${title} developer who lives in ${country} and has ${skills.join('')}` 
}
const skills = ['HTML ', 'CSS ', 'React']
console.log(getUserInfo('Jay', 'Lawn', 'Kenya', 'FrontEnd Dev', skills))
//Jay, Lawn, a Kenya developer who lives in FrontEnd Dev and has HTML CSS React

