function intervalo10E20 (numeros) {
    let num = numeros
    let entre = 0
    let fora = 0
    for (i = 0 ; i < numeros.length ; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20){
            entre++
        } else {
            fora++
        }
    }
    return [entre, fora]
}
console.log(intervalo10E20([5,4,9,19,14,13,12,17,22,26]))