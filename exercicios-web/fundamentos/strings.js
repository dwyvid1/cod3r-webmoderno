// String é uma cadeia de caracters!
// Um dado literal é um dado que você pode usar sem precisar armazenar o mesmo em uma variável!

const escola = "cod3r"

// Uma String funciona através de índices.
// Ou seja, 0 1 2 3 4.
console.log(escola.charAt(4))
console.log(escola.charAt(5))
// Valor dentro da tabela Unicode, ou Ask.
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
// Ele vai do índice 0 até o índice 3, mas sem incluir o índice 3.
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))