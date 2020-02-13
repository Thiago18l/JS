// Aula de revisão de estratégias para criação de objetos

// Notação literal
const obj1 = {} // Objeto

console.log(obj1)

//Objeto em JS 
console.log(typeof Object, typeof new Object)
const obj2 = new Object

//Funções Construtoras

function Produto(nome, prec, desc){
    this.nome = nome
    this.getPrecodesc  = () => {
        return prec * (1- desc)
    }
}
const Prod1 = new Produto('Mingal', 25.00, 0.1)
console.log(Prod1.getPrecodesc())

// Função factory 
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = new criarFuncionario('Maria', 2400, 3)
const f2 = new criarFuncionario('João', 1505, 5)
console.log(f1.getSalario(), f2.getSalario())

// parJSON  

const fromJSON = JSON.parse('{"info": "Sou um Json"}')

console.log(fromJSON.info)