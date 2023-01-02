//EXEMPLO BÁSICO
// let condicao = false

// if (condicao) {
//     console.log('Entrei no if!')
// } else {
//     console.log('Entrei no else!')
// }

//EXEMPLO Swite case
// Swite case
// let paisDeOrigem
// switch (paisDeOrigem) {
//     case 'Brasil':
//         console.log('Brasileiro')
//         break;
//     case 'EUA':
//         console.log('norte americano')
//         break;
//     case 'Inglaterra':
//         console.log('inglês')
//        break;                    
//     default:
//         console.log("Nacionalidade não encontrada")
//         break;
// }

// EXERCÍCIO 09
// Receba um número do usuário
// Se for par, imprima: é par
// Senão, imrpima: é impar

// const numero = Number(prompt("Digite um número"))

// if (numero % 2 === 0){
//     console.log("É par")
// } else {
//     console.log("É impar")
// }

// EXERCÍCIO 10
// Receba do usuário o nome de um bichinho:
// Se for um cachorro, retorne: Auau
// Se for um gato, retorne: Miau
// Se for uma vaca, retorne> Muuuu
// Se for outro bichinho, retorne: sem barulho reconhecido :(
// Faça utilizando if/else e switch case

const bichinho = prompt("Digite um bichinho")

// if (bichinho === "cachorro") {
//     console.log("Au au")
// } else if (bichinho === "gato") {
//     console.log("Miau")
// } else if (bichinho === "vaca") {
//     console.log("Muuuuu")
// } else {
//     console.log("Barulho não encontrado")
// }

switch(bichinho){
    case "cachorro":
        console.log("Au au")
        break;
    case "gato":
        console.log("Miau")
        break;
    case "vaca":
        console.log("Muuuuu")
        break;
    default:
        console.log("Barulho não encontrado")
        break;
}
