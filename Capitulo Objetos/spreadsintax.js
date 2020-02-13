
// Objetos 

const pikachu = { name: ' Pikachu'}
const status = { hp: '40', attack: 60, defense: 45 }

// bad code below

pikachu['hp'] = status.hp
pikachu['attack'] = status.attack
pikachu['defense'] = status.defense

console.log({pikachu})
// spred sintax =>

 const lvl0 = {...pikachu,...status}
 const lvl1 = {...pikachu, hp: 45, attack: 65, defense: 50}
console.log('Pikachu lvl 0', lvl0)
 console.log('Pikachu Lvl 1', lvl1)

 // Arrays

 let pokemon =  ['Arbok', 'Raichu', 'Charizard'];
 // bad array below =>
 pokemon.push('Bulbasaur')
 pokemon.push('Tigglypuff')
 pokemon.push('Weedle')
 pokemon.forEach( (nome,index) => {
    console.table([nome, index])     
 })

// Good array code =>


//push equivalent
pokemon = [...pokemon, 'charmander', 'Metapod']

// Shift 
pokemon = ['Alakasam', 'Helldoug', ...pokemon] 

console.log(pokemon)