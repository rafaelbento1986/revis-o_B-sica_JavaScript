// EXERCÍCIO 07
// Crie uma função que:
// Receba um array de números e 
// Retorne um novo array com o último e o primeiro número do array recebido divididos por dois

const array = [6, 7, 8, 9, 10]
//MANEIRA 1 DE FAZER #############################################
function divideDois1(arrayDeNumeros) {
    const primeiro = arrayDeNumeros[0] /2
    const ultimo = arrayDeNumeros[array.length-1] /2
    
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[array.length-1] = ultimo
    return arrayDeNumeros
}

console.log(divideDois1(array))
//MANEIRA 2 DE FAZER #############################################
let divideDois2 = function (arrayDeNumeros) {
    const primeiro = arrayDeNumeros[0] /2
    const ultimo = arrayDeNumeros[array.length-1] /2
    
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[array.length-1] = ultimo
    return arrayDeNumeros
}

console.log(divideDois2(array))
//MANEIRA 3 DE FAZER #############################################
let divideDois3 = (arrayDeNumeros) => {
    const primeiro = arrayDeNumeros[0] /2
    const ultimo = arrayDeNumeros[array.length-1] /2
    
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[array.length-1] = ultimo
    return arrayDeNumeros
}

console.log(divideDois3(array))