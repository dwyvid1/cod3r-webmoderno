// O while usado para laços de repetições.
// Usado para operar de forma indeterminada.

// Random gera um valor entre 0 e 1.
function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// Precisa de uma expressao que retorne verdadeiro ou falso.
// Ou seja...
// Enquanto a expressão for verdadeira continue executando o laço.

// A expressão tem que ser diferente que -1...
while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')