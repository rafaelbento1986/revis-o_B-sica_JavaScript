// EXERCÍCIO 06

// Dada a lista ["batata", "cenoura", "beterraba"] realize as operações:

// Imprima o segundo item da lista
// Imprima o tamanho da lista
// Adicione o item "mandioca"
// Verifiqye se há um item chamado cenoura
// Remova o item de índice 1

const listaDeCompras = ["batata", "cenoura", "beterraba"]

console.log(listaDeCompras[1])
console.log("Tamanho da lista:", listaDeCompras.length)

listaDeCompras.push("Mandioca")
console.log(listaDeCompras)

listaDeCompras.includes("cenoura")
console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))

listaDeCompras.splice(1, 1)
console.log(listaDeCompras)