// Um objeto é uma coleção de pares chave e valore!
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // 40% 
// Evitar atributos com espaços. ^^^
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// JSON (JavaScript Object Notation )
// O JSON é utilizado para trocar dados entre sistemas.
// '{ "nome": "Camisa Polo", "preco": 79.90}'