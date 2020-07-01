function divisaoEResto (divisor, dividendo) {

    return `Divisão = ${Number(dividendo / divisor).toFixed(2)}
    Resto = ${Number(dividendo % divisor)}`
}

console.log(divisaoEResto(3, 15))