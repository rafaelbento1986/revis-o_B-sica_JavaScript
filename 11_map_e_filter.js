/*
Exercício 13
Dado um array de produtos onde cada produto possui nome, categoria e preço:
•	Retorne um novo array com todos os produtos porém com o 10% de desconto no preço
•	Retorne um array apenas com os itens da categoria hortifrúti
•	Retorne um array apenas com os itens de hortifrúti E com 10% de desconto no preço
*/

const produtos = [
 { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
 { nome: "Guaraná 21", categoria: "Bebidas", preco: 7.8 },
 { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
 { nome: "Dúzia de banana", categoria: "Hortifruti", preco: 5.7 },
 { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
 { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
 { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
 { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
 { nome: "Beringela kg", categoria: "Hortifruti", preco: 8.99 },
 { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 },
]

const produtosComDesconto = produtos.map((prod)=> {
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
})

console.log(produtosComDesconto)

const Hortifruti = produtos.filter((prod) => {
    return prod.categoria === "Hortifruti"
})

console.log(Hortifruti)

const HortifrutiComDesconto = produtos.filter((prod) => {
    return prod.categoria === "Hortifruti"
}).map((prod)=> {
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
})

console.log(HortifrutiComDesconto)