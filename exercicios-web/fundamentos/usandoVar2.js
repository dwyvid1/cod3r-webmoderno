// Você pode ter duas variáveis iguais dentro do seu programa!
// Porém, somente com escopos diferentes!

// Escopo 1
var numero = 1
// Escopo 2
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)