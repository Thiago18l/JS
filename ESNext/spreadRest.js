// Operador ... rest(juntar) / spread (espalhar)
// usar rest como parametro de funcões


// spread com objetos
const funcionario = { nome: 'Maria', salario: 1500 }
const clone = { ativo: true, ...funcionario } // colocando o spread estou pegando todos os atributos de funcionario

console.log(clone.nome) // output Maria

// usar spread com array

const grupoA =  ['João', 'Pedro', 'Gloria'];
const GrupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(GrupoFinal)
