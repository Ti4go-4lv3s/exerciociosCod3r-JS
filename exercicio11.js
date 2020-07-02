function anoBissexto (ano) {
    let anoBis = ''
    if (ano < 0) {
        return "Ano inválido"
    }
    if (ano % 4 == 0) {
        anoBis = "Ano bissexto"
    } else {
        anoBis = "Ano não bissexto"
    }
    if (ano % 100 == 0) {
        anoBis = "Ano não bissexto"
    }
    if (ano % 400 == 0) {
        anoBis = "Ano bissexto"
    } 
    
    return anoBis
}

console.log(anoBissexto(1820))