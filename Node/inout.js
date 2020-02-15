const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo) // true or false, dependendo do que o usuario digitar ou não

if (anonimo){
    process.stdout.write('Fala anonimo!\n') // saída padrão vai escrever 'fala anonimo' se for true
    process.exit() // para finalizar a aplicação

} else {
    process.stdout.write('Informe seu nome: ');
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n','') // .replace === remove o '\n' e o substitui por um espaço vazio
        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    }) // evento 'data' para quando vc digitar algo e aperta enter
}

