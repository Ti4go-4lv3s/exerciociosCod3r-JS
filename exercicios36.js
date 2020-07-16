function multiplicarVetor (vetor, numInt){
    let vetorResultado = []
    for (i = 0 ; i < vetor.length ; i++) {
        vetorResultado.push(vetor[i] * numInt)
    }
    return vetorResultado
}

function multiplicarComCondicao (vetor, numInt) {
    let vetorResultado = []
    for (i = 0 ; i < vetor.length ; i++) {
        if(vetor[i] > 5 ){
            vetorResultado.push(vetor[i] * numInt)
        }
    }
    return vetorResultado
}
console.log(multiplicarVetor([5,6,4,3,2,12,32,1,123,2,], 2))
console.log(multiplicarComCondicao([5,6,4,14,23,12,3,2], 2))