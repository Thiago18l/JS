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

// Função 2 para ver o tratamento usando o reject

function FalaDepoisDe2(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            reject(frase)
        }, segundos * 1000)
    })
}

FalaDepoisDe2(2, 'Tratamento')
    .then(frase => frase.concat(' de exceptions'))
    .then(outraFrase => console.log(outraFrase))
    .catch(err => console.log(err)) // output vai ser tratamento
