const random = () => {
    return Promise.resolve(Math.random())
}

//'Bad promise code'

const somarRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
    .then(v => {
        first = v;
        return random()
    })
    .then(v => {
        second = v;
        return random()
    })
    .then(v =>{
        third = v;
        return first + second + third
    })
    .then(v =>  {
        console.log(`Resultado 1: ${v}`) 
    })
}

console.log(somarRandomAsyncNums())

// Good way to code Promise code

const somarRandomAsyncNums2 = async() => { // cria assincronismo
    const first =  await random()
    const second = await random()
    const third = await random()

    console.log(`Resultado 2: ${first + second + third}`)

}
console.log(somarRandomAsyncNums2())