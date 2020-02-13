// Função IIFE [ AULA 01]

//  Que é uma função imediantamente invocada...
// Sem os primeiros parenteses não funciona
(function (){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
}) () // < - '()' está executando a função