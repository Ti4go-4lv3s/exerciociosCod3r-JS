function jurosSimples (capitalIni,taxa, tempoAplicado) {
    let juros = capitalIni * (taxa/100) * tempoAplicado
    let montante = (capitalIni + juros)

    return montante
}

function jurosCompostos (capitalIni, taxa, tempoAplicado) {
    let montante = capitalIni * (1 + (taxa/100)) ** tempoAplicado
    return montante
}
console.log(jurosSimples(1000, 10, 10))
console.log(jurosCompostos(1000, 10, 10))