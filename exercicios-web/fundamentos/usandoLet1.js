// Let: Escopo global, escopo de função e escopo de bloco

// Escopo abrangente!
let numero = 1
{
// Escopo menor
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)