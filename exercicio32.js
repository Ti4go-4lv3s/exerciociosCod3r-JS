let vetor = [5,6,9,4,2,5,1,3,312,21,15,11,54,51,22,21,2,1]
let vetorSomado = 0
let divisor = vetor.length
let mediaArit = 0

for (i = 0 ; i < vetor.length ; i++){
    vetorSomado += vetor[i]
}
mediaArit = vetorSomado / divisor
console.log(mediaArit.toFixed(2))
console.log(divisor)
