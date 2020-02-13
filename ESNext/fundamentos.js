
// Log

const peso1 = 55.55;
const peso2 = Number('65');

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Avaliação

const nota1 = 9.5;
const nota2 = 7.7;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));

//

const f3 = () => console.log(this === Object);

f3();

// Função bind

    const pessoa = {
        saudacao: 'Bom dia',
        falar(){
            console.log(this.saudacao)
        }
    }
pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas entre funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()    