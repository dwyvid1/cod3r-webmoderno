const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

// Adiciona um novo elemento no array
pilotos.push('Verstappen')
console.log(pilotos)

// Remove o primeiro elemento de um array
pilotos.shift()
console.log(pilotos)

// Adiciona um elemento no primeiro índice de um array
pilotos.unshift('Hamilton')
console.log(pilotos)

// O splice pode adicionar e remover elementos:

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// O slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)