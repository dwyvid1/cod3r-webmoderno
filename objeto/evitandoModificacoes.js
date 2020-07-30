// Object.preventExtensios 
// 1. Você não pode adicionar novos atributos;
// 2. Você pode alterar dados;
// 3. Você pode deletar atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
// 1. Você pode modificar atributos;
// 2. Você não pode deletar ou adicionar atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = Selado + Valores Constantes
const Héllen = { nome: 'Héllen Carollina', idade: 17 }
Object.freeze(Héllen)

Héllen.nome = 'Soares Medeiros'
Héllen.idade = 18
Héllen.corCabelo = 'Preto'
delete idade

console.log(Héllen)