// template literals
let word1 = 'Amanda'
let word2 = 'Toop'

// template literal
const fullName = `${word1} ${word2}`
document.getElementById("example").innerText = fullName

// destructuring objects
const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
        }
}

// below allows you to reference contents without doing player.name notation
// const {name, club, address:{city}} = player;
// console.log(`${name} plays for ${club} in ${city}`)

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects:{diceGame}} = student
// console.log(`${diceGame}`)

// destructuring arrays
// goes index by index
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Jones']
// will output Dylan
console.log(firstName)


