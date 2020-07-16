function calcularAnuidade (mes, anuidade) {
    let valorAnuidade = anuidade

    while (mes > 1) {
        console.log((anuidade * (1 + (5/100)) ** mes).toFixed(2))
        mes-- 
    }
    
}
calcularAnuidade(24, 4.00)