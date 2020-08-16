// Browser, Node e um pouco de contexto...
let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca com var e let!
abc = 3 // Não faça isso em casa!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}

