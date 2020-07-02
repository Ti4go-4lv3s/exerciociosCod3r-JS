function planoDeSalario (plano, salario) {
    switch (plano) {
        case 'A':
            return salario + (salario * 10) / 100
        case 'B':
            return salario + (salario * 15) / 100
        case 'C':
            return salario + (salario * 20) / 100
        default:
            return 'Plano inválido'
    }
}
console.log(planoDeSalario('C', 1000))