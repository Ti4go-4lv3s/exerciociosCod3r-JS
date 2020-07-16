let vetor = [5,6,9,4,2,5,1,3,312,21,15,11,54,51,22,21,2,1]
let maior = vetor[0]
let menor = vetor[0]

for (i = 0 ; i < vetor.length ; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
    } else if (vetor[i] < menor) {
        menor = vetor[i]
    }
}

console.log(`O maior número é ${maior}
O menor número é ${menor}`)