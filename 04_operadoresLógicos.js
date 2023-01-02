// EXERCÍCIO 04

// Um parque de diversões te contratou para fazer um sistema que permite ou proíbe a entrada de pessoas em um brinqueado MUITO RADICAL

// Para entrar, é necessário:
// Te mais de 18 anos
// Ter mais de 1,60m de altura
// Não ter nenhum problema cardíaco

// Faça essas perguntas ao usuário e diga o resultado no console

const idade = Number(prompt("Digite sua idade"))
const altura = Number(prompt("Digite sua alture em centímetros"))
const temProblemaCardiaco = prompt("Você tem algum problema cardíaco? S/N")

if (idade >= 18 && altura >= 160 && temProblemaCardiaco === "N") {
    console.log("Pode entrar")
} else {
    console.log("NÃO Pode entrar")
}