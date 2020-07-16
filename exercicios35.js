let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdciona = [6, 7, 8, 9, 10]

function vetorJunto(vetor1, vetor2) {
    
    for (i = 0; i < vetor2.length ; i++) {
        console.log(vetor2[i])
        vetor1.push(vetor2[i])
    }
    console.log('Vetor Adcionado = ' + vetor2)
    console.log('Vetor Resultado = ' + vetor1)
}

vetorJunto(vetorPilha, vetorAdciona)