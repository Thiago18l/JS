// console.log(global)

global.meuApp = Object.freeze({
    ola(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema'
}) // usando freeze para que o objeto não possa ser modificado