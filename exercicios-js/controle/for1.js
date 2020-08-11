// Usando um laço com repetição determinada

let contador = 1
while(contador <= 10) {
    console.log(`contador ${contador}`)
// Adicionando um novo incremento para o contador valer mais que 10!
// Sendo assim, a expressão será falsa!
// Sendo falsa a expressão, a operação irá parar!
    contador++
}

for(let contador2 = 1; contador2 <= 10; contador2++) {
    console.log(`contador2 = ${contador2}`)
}

const notas = [6.1, 7.4, 9.8, 8.1, 7.7]
// Lenght: comprimento.
for(let contador3 = 0; contador3 < notas.length; contador3++) {
    console.log(`nota = ${notas[contador3]}`)
}
// Caso o let não seja colocado,,,
// os dados podem estar disponíveis no escopo global.
// Ou seja, é recomendável sempre usar o let no contexto mostrado acima.