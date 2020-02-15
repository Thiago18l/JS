// Aula de revisão sobre Arrow function 

const soma = (a, b) => a+b // não precisa colocar return, já é implicito

console.log(soma(2, 4))

// Arrow function com this

const lexico = () => console.log(this === exports) // sempre vai apontar para exports
const lexico2 = lexico.bind({}) 

lexico()
lexico2()

// Parametros default 

function log(texto = 'Node'){ // caso não seja passado nada a variavel texto vai receber o valor padrão 'node'
    console.log(texto)
}
log(null) // output === null // porque ele vai achar que você quer um valor nulo.
log(undefined)// output === Node
log('Anything') // output === 'Anything'  

// Operador rest / spread

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total+= n)
    return total
}
console.log(total(10, 20, 30, 500))