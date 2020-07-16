function mediaPonderada (codigo, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]
    notas.sort()
    let cod = codigo
    let ponderada = 0
    
    while (cod >= 0) {
         ponderada = (notas[0] * 4 + notas[1] * 3  + notas[2] * 3) / 4 + 6 
         if (ponderada >= 5) {
             console.log('APROVADO\n')
 
             console.log(`Aluno, código ${codigo}\nPrimeira nota ${notas[0]}\nSegunda nota ${notas[1]}\nTerceira nota ${notas[2]}\nMédia ${ponderada.toFixed(2)}\n`)
 
         } else {
             console.log('REPROVADO')
         }
         cod--
    }
    
 }
 mediaPonderada(4, 7.5, 6.5, 8.5)
 