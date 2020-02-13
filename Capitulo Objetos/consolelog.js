// Boas práticas de programação em JS

const foo = { name: 'Thiago', age: '22', nervous: false };
const bar = { name: 'João', age: '16', nervous: true };
const barz = { name: 'Maria', age: '28', nervous: true };


// bad ways to use console.log

console.log(foo)
console.log(bar)
console.log(barz)

// right way to use console.log, computed Property names
console.log('%c Meus Amigos', 'color: orange; font-weight: bold;')
console.log({ foo, bar, barz })

// console.table

console.table([foo, bar, barz])

//benchmark performace

console.time('Looper')
let i = 0;
while(i < 10000){ i++ }

console.timeEnd('Looper') 


