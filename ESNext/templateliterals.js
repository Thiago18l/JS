
const horse = {
    name: 'Black', 
    size: 'Grande',
    skills: ['amigável', 'veloz'],
    age: 8
}

// Bad string code

let bio = horse.name + ' é um Cavalo ' + horse.size + ' que tem  ' + horse.age + ' anos'
console.log(bio)

// right code =>

const { name, size, age } = horse;

bio = `${name} é um Cavalo ${size} que tem ${age} anos`
console.log(bio);

// Advanced method

function horseAge(str, agr){
    const ageStr = age > 5 ? 'velho' : 'novo'
    return `${str[0]} ${ageStr} em ${age} anos`
}
const bio2 = horseAge`esse cavalo é${horse.age}`
console.log(bio2)