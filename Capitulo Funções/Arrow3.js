let comparacomThis =  function (param) {
    console.log(this === param)
}

comparacomThis(global) // Escopo global 

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)

let comparacomThisArrow = param => console.log(this === param)

comparacomThisArrow(global)
comparacomThisArrow(module.exports)

comparacomThisArrow =  comparacomThisArrow.bind(obj)
comparacomThisArrow(obj)
comparacomThisArrow(module.exports)