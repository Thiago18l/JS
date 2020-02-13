const avo = {atributo: 'A'}
const pai = {__proto__: avo, atributo2: 'B'}
const filho = {__proto__: pai, atributo3: 'C'}

console.log(filho.atributo)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <=  this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status (){
        return  `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro) // estabeleci que ferrari tem como prototipo carro
Object.setPrototypeOf(volvo, carro) // ""

console.log(ferrari)
console.log(volvo)
volvo.acelerar(100)
console.log(volvo.status())
ferrari.acelerar(325)
console.log(ferrari.status())
