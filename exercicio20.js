function contagemDeNotas (dinheiro) {

    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    
    while (dinheiro > 0) {
        while (true){
            if (dinheiro >= 100) {
                dinheiro -= 100
                nota100 ++
                break
            } 
            if (dinheiro >= 50) {
                dinheiro -= 50
                nota50 ++
                break
            }
            if (dinheiro >= 10) {
                dinheiro -= 10
                nota10 ++ 
                break
            } 
            if (dinheiro >= 5) {
                dinheiro -= 5
                nota5 ++
                break
            }
            if (dinheiro >= 1) {
                nota1 ++
                dinheiro -= 1
                break
            }
        }
    }
        return selecaoDeNotas(nota100, nota50, nota10, nota5, nota1)
        
}

    function selecaoDeNotas (n100, n50, n10, n5, n1) {
        let mensagem = ''
        if (n100 > 0) {
            mensagem += `${n100} notas de 100 reais. \n`
        }
        if (n50 > 0) {
            mensagem += `${n50} notas de 50 reais.\n`
        }
        if (n10 > 0) {
            mensagem += `${n10} notas de 10 reais\n`
        }
        if (n5 > 0) {
            mensagem += `${n5} notas de 5 reais.\n`
        }
        if (n1 > 0) {
            mensagem += `${n1} notas de 1 real.`
        }
        
    return mensagem
} 

console.log(contagemDeNotas(698))