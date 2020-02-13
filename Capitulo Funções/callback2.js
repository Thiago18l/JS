const notas = [7.7, 3.3, 4.5, 8.8, 5.5, 6.7]


let notasB = []
for (let i in notas){
    if (notas[i] < 7) notasB.push(notas[i])
}

console.log(notasB)

// Com Callback
notasB = notas.filter(function (nota) {
    return nota < 7
}); // Utilizando o filter para inserir os elementos dentro do array 'notasB'

console.log(notasB)


// Usando arrow function
const notasB3 = notas.filter(nota => nota < 7)
console.log(notasB3)