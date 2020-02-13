// Aula de getters e setters [ Aula ]

const sequencia = {
    _valor: 1, // convenção para deixar um atributo privado
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}   

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // quando tentar alterar o valor para um menor ele não vai aceitar...
console.log(sequencia.valor, sequencia.valor)