const fs = require('fs')



// sincrono...
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // transforma em um arquivo JSON
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, conteudo)=>{
    console.log('Conteúdo da pasta...')
    console.log(conteudo)
})