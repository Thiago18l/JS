// com promises

const http = require("http");

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, resposta => {
      let resultado = "";
      resposta.on("data", dados => {
        resultado += dados;
      });
      resposta.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (err) {
          reject(err); // tratamento de exceptions
        }
      });
    });
  });
};

let nomes = [];
getTurma("A").then(alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
});
getTurma("B").then(alunos => {
  nomes = nomes.concat(alunos.map(a => `A:${a.nome}`));
});
getTurma("C").then(alunos => {
  nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
  console.log(nomes);
});

// usando em uma unica chamada...

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) // vai ficar esperando as promises sendo resolvidas ou rejeitadas
    .then(turmas => [].concat(...turmas)) // usando o operador spread para espalhas os dados no array
        .then(alunos => alunos.map(aluno => aluno.nome))
            .then(nomes => console.log('usando Promise.all():', nomes))
            .catch(err => console.log(err.message))
// passando uma letra de turma que não existe
getTurma('D').catch(err => console.log('Messagem de erro:', err.message))