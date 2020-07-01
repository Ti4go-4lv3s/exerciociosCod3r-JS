function calculos(a, b) {
    return `calculos entre ${a} e ${b} 
    soma  = ${a + b} 
    subtraçao = ${a - b}
    multiplixação = ${a * b}
    divisão = ${Number(a / b).toFixed(2)}
    módulo = ${a % b}`
}

console.log(calculos(5, 5))