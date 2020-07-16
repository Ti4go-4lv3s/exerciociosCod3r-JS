function numerosImpares (ini=0, fim=100) {
    
    let troca = ini
    if (ini > fim) {
        
        ini = fim
        fim = troca
    }
    for (i = ini ; i <= fim ; i++) {

        if (i % 2 !== 0) {
            console.log(i)
        }
        
    }
}

numerosImpares(75, 25)