let listaString = "10, 20, 20, 25, 3, 1, 40, 4, 50, 70, 23"

function verificarString(listaString) {
    
    let lista = listaString.split(", ")
    let maior = parseInt(lista[0])
    let menor = parseInt(lista[0])
    let bateuRecord = 1
    let menorPontuacao = 0

    for (i = 1; i < lista.length ; i++) {
        lista[i] = parseInt(lista[i])
        if (lista[i] > maior) {

            maior = (lista[i])
            bateuRecord++

        }
        if (lista[i] < menor) {

            menor = lista[i]
            menorPontuacao = i + 1
        }
    }
    return [maior, menor, bateuRecord, menorPontuacao]
    
}

console.log(verificarString(listaString))