function planoDeSaude (idade) {
    
    if (idade < 10) {
        return 180
    }
    if (idade <= 30) {
        return 150
    }
    if (idade <= 60) {
        return 195
    }
    if (idade > 60) {
        return 230
    }
}

console.log(planoDeSaude(44))