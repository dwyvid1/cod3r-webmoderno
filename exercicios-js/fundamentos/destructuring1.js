// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Quero ter acesso a nome e idade...
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep = null}} = pessoa
console.log(logradouro, numero, cep)

// Cuidado para não acessar atributos que não existem!
const {conta: {ag, num}} = pessoa
console.log(agencia, numero)