let vetorDeNumeros = [1,2,3,4,5,6,7,8,9,10,11,13,16,19]
let positivos = 0
let negativos = 0
for (i = 0 ; i < vetorDeNumeros.length ; i++) {
    if (vetorDeNumeros[i] % 2 == 0) {
        positivos++
    } else {
        negativos++
    }
}
console.log( positivos, negativos)