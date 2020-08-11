// JavaScript Object Notation.
// 1. É um formato textual;
// 2. Não suporta funções.
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1 b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
// Atenção: O nome deve haver "aspas duplas.""
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))