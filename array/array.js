// O Array é JS é um Objeto especial.
// O Array tem uma estrutura dinâmica.
console.log(typeof Array, typeof new Array, typeof [])

// Não recomendável...
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
// Método mais apropiado para adicionar novos elementos...
aprovados.push('Ábia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordenando o Array.
console.log(aprovados)
// Observação: Alguns métodos alteram o Array.
// Porém, outros métodos podem retornar um novo Array.

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// O splice é uma função.
// O splice serve para remover e adicionar elementos.
aprovados.splice(1, 1)
// Primeiro param: Indice que você deseja trabalhar.
// Segundo param: Quantos elementos você deseja exluir.
// 'Elemento1', 'Elemento2' <-- adicionando elementos.
console.log(aprovados)