function valorDeFormaCorreta(a, b) {
    let resultado = a + b
    
    return Number(resultado).toFixed(1).replace('.', ',')
}

console.log(valorDeFormaCorreta(0.1, 0.2))