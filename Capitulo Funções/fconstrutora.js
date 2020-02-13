// Aula de funções construtoras [AULA 01]

function Carro(VelocidadeMax=200, delta = 5 ){
    // Atributo privado 'let'
    let VelocidadeAtual = 0 

    // Metodo publico
    this.acelerar = function (){
        if (VelocidadeAtual+delta <= VelocidadeMax){
            VelocidadeAtual+=delta;
        }else {
            VelocidadeAtual = VelocidadeMax
        }
    }
    //Metodo publico
    this.getVelocidade = function  (){
        return VelocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())