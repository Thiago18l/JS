// Estruta Set que é uma estrutura de conjunto, não indexada e que não aceita repetição

const times = new Set();

times.add("Flamengo");
times.add("Palmeiras").add("São Paulo"); // pode ser encadeado
times.add("Flamengo"); // Não aceita repetição

console.log(times);
console.log(times.size); // quantos elementos tem dentro do Set
console.log(times.has("Flamengo")); // true
console.log(times.has("flamengo")); // false

console.log(times.size); // output 3

times.delete("Palmeiras");
console.log(times.size); // output 2
console.log(times.has("Palmeiras")); // output false

const nomes = ["Thiago", "Thiago", "João"];
const nomesSet = new Set(nomes);

console.log(nomesSet); // Só irá aparecer 1 nome thiago, pois a estrutura set não pode haver repetição
