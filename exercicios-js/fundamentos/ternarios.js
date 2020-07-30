// Arrow Function!
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const resultado2 = nota2 => {
    return nota2 >= 8 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(1.9))
console.log(resultado2(8.1))
console.log(resultado2(9.0))