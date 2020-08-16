console.log(typeof Object)
// Instanciando uma função!
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
// O Produto foi internamente modificado em função!
console.log(typeof Produto)
console.log(typeof new Produto())