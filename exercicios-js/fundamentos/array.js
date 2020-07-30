// Literal...
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

//valores[10] = 10
//console.log(valores)

valores[4] = 10
console.log(valores.length) // Length = Comprimento

// Push = Adicionar
valores.push({id:3}, false, null, 'festa')
console.log(valores)

// Retirando valores do Array!
console.log(valores.pop()) // Retirando o último elemento...
delete valores[0]
console.log(valores)

console.log(typeof valores)
