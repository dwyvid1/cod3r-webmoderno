// O switch é feito para ser usado em múltiplas seleções.
// Math: Operação matemátcia.
// Floor: Arrendodar para baixo.
// O switch não retorna um valor em boolean.

// Break: Terminar a leitura de um case.

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
// Se for 10 ou 9...        
        case 10:            
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)