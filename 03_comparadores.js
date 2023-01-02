// EXERCÍCIO 03

// Sorteie um número aletório entre 1 e 10

// Peça para o usuário inserir um número de 1 a 10

// Imprima no console os dois números dizendo se o que foi digitado pelo usuário é menor, maior ou igual ao sorteado.

const numeroSorteado = Math.floor(Math.random() * 10) +1
const numeroRecebido = Number(prompt("Insira um número de 1 a 10"))

console.log(`O número sorteado foi: ${numeroSorteado}`)

if (numeroRecebido === numeroSorteado){
    console.log("Seu número é igual ao número sorteado!")
} else if (numeroRecebido > numeroSorteado) {
    console.log("Seu número é maior do que o número sorteado!")
} else {
    console.log("Seu número é menor do que o número sorteado!")
}