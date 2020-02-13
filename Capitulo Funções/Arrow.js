// Função Arrow [Aula 01]

// Sintaxe reduzida

let dobro = function (a){
    return 2 * a;
}
// com arrow

dobro = (a) => {
    return 2 * a;
}
dobro = a => 2*a

console.log(dobro(Math.PI));


// Parametros
let ola =  function (){
    return 'olá'
}
ola = ()  => 'Olá'
console.log(ola())
ola = _ => 'Oilá' // Apenas um parametro

console.log(ola())