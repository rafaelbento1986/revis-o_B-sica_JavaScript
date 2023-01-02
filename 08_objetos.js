// EXERCÍCIO 08

// Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade e gênero musical preferido.

// Imprima no console as propriedades desse objeto, seguindo o modelo abaixo:

// "O nome da pessoa é ___, elta tem ___ anos e gosta muito de ___."

// Crie uma nova pessoa, com mesma idade e gênero musical, mas nome diferente.

const pessoa = {
    nome: 'Leticia',
    idade: 27,
    generoMusical: "Rock"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

const outraPessoa = {
    ...pessoa,
    nome: "Amanda"
}

console.log(outraPessoa)