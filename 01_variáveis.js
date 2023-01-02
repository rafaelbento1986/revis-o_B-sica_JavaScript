// EXERCÍCIO 01

// Crie uma variável para guardar o nome de um produto e peça para o usuário inserir esse nome.
const nomeDoProduto = prompt("Insira o nome do produto")

// Crie uma variável para guardar o preço de um produto e peça para o usuário inserir esse valor.
let precoDoProduto = Number(prompt("Insira o preço do produto"))

//O GERENTE FICOU DOIDO! Dê um desconto de 1 real no preço do produto, guardando o novo preço na mesma variável.

precoDoProduto = precoDoProduto - 1

console.log(` O produto ${nomeDoProduto} custa R$ ${precoDoProduto}`)
