function calculadoraBasica (a, b, operador) {
    switch (operador) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Esse tipo de conta não é válido.'
    }
}

console.log(calculadoraBasica(5, 6, '%'))