let vetor = [5,6,-9,4,-2,5,1,-3,312,-21,15,-11,54,-51,22,-21,2,1]
let contNegativos = 0

for (i = 0 ; i < vetor.length ; i++) {
    if (vetor[i] < 0) {
        contNegativos++
    }
}

console.log(`Nesse vetor há ${contNegativos} números negativos`)