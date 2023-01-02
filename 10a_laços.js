// EXERCÍCIO 11

// Receba um array com números e devolva qual o maior dentro dele

// Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é o 18"

// Faça utilizando as três estruturas de loop vistas

const numeros = [11, 15, 18, 14, 12, 13]

let maior = -Infinity

// MANEIRA WHILE ##############
// let i = 0
// while(i< numeros.length) {
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }    
//     i++
// }


// MANEIRA FOR ##############
// for(let i = 0; i < numeros.length; i++) {
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }

// MANEIRA FOR OF ##############
for (let numero of numeros){
    if(numero > maior){
        maior = numero
    }
}

console.log(`O maior númeor é ${maior}`)