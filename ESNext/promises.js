/*
resolve é uma função que será chamada quando a promise 
for atendida Promise tem dois parametros resolve e reject
*/
function falaDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{ 
        setTimeout(() =>{
            resolve(frase)
        },segundos * 1000)
    })
}
/*
    Resolve aceita apenas um unico parametro ou seja, se colocar mais de um parametro ele vai retornar undefinied
    Caso queira passar varios atributos, vai ter que passar como um Objeto
*/

falaDepoisDe(3, 'Que ótimo!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))