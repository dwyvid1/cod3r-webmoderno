// O var está no escopo global.
// No Browser, o window é um objeto global.
// Quando você cria uma variável fora de uma função, ela se torna global!

{
    {
        {
            {
                 var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

// IMPORTANTE: FUJA DO ESPOCO GLOBAL!