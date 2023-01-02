// EXERCÍCIO 05

// Dada a frase " Hoje vou comer cenoura, ebaaaa " realize as operações:

// Imprima a frase inicial juntamente com seu tamanho
// Retire os espaços do início e do fim
// Faça com que possua apenas letras minúsculas
// Verifique se as palavras comer e batata estão presentes
// Substitua cenoura por batata
// Verifique novamente se possui as palavras comer e batata

const frase = " Hoje vou comer cenoura, ebaaaa "

console.log(frase, frase.length)
console.log(frase.trim(), frase.length)
console.log(frase.toLowerCase())
console.log("Tem a palavra comer?", frase.includes("comer"))
console.log("Tem a palavra batata?", frase.includes("batata"))

const novaFrase = frase.replaceAll("cenoura", "batata")
console.log(novaFrase)

console.log("Tem a palavra comer?", novaFrase.includes("comer"))
console.log("Tem a palavra batata?", novaFrase.includes("batata"))