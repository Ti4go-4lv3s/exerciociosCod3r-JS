function sistemasDeNotas (nota) {
    let multiplo = nota % 5
    if (nota < 38) {
        return 'Reprovado'
    }  else {
        if (multiplo >= 3) {
            return nota + (5 - multiplo)
        } else {
            return nota - multiplo
        }
    }
    
       
}

console.log(sistemasDeNotas(45))