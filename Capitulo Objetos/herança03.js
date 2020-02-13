//Aula de herança em JS [AUla- 3]

const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Maria'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança`)
}
