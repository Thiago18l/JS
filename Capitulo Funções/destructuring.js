// Melhores maneiras de usar o JS

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'anfibio',
    meal: 10,
    diet: 'frutas'
}

// Bad code below =>
function feed1(animal){
    return `1 - Alimente ${animal.name} com ${animal.meal} kg's de ${animal.diet}` 
}
console.log(feed1(turtle))
// usando destructuring 

function feed2({ name, meal, diet}) {
    return `2 - Alimente ${name} com ${meal} kg's de ${diet}`;
}
console.log(feed2(turtle))

// ou

function feed(animal){
    const { name, meal, diet} = animal
    return `3 - Alimente ${name} com ${meal} kg's de ${diet}`
}
console.log(feed(turtle))
