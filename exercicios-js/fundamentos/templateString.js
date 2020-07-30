const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// Strings não suportam quebras de linha!
// Template String suportam quebra de linha!
const tamplate = `
    Olá
    ${nome}!`
console.log(concatenacao, tamplate)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)