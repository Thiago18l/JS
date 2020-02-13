

// dont do this =>
let i = 0;
let total = 0;
const withTax = [];
const highValue = [];
const orders = [1, 2, 3 , 4]
for (i = 0; i < orders.length; i++ ){
    // reduce
    total += orders[i]
    console.log('Total =', total)

    // Map
    withTax.push(orders[i])
    console.log('With Tax =', withTax)

    //filter
    if (orders[i] > 2){
        highValue.push(orders[i]) 
        console.log('High Value =', highValue)
    }

}


// Good loop code

//reduce

const total1 = orders.reduce((acumulador, valorAtual) => acumulador + valorAtual)
console.log('total = ', total1)


// Map 

const withTax2 = orders.map(v => v * 1.1)
console.log(withTax2)

// Filter

const highValue2 = orders.filter( valor => valor > 3)
console.log('Highvalue = ',highValue2)