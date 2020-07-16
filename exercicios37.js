const  pA = function(a1, an, r = 1) {
  let termosPA = [a1]
  let soma = 0
  for (i = 1 ; i < an ; i++) {
    termosPA.push(a1 += r)
  }
  termosPA.forEach(somaDosTermos => {
    console.log(somaDosTermos)
  })
  soma = (termosPA[0] + termosPA[termosPA.length - 1]) * an / 2
  console.log(soma)
  console.log('\n')
}

const  pG = function(a1, n, q) {
  let termosPG = [a1]
  let mult = 0
  for (i = 1 ; i < n ; i++) {
    termosPG.push(a1 *= q)
  }
  termosPG.forEach(somaDosTermos => {
    console.log(somaDosTermos)
  })
  mult = termosPG[0] * (Math.pow(q, n) - 1) / (q - 1)
  console.log(mult)
   
}
pA(1, 10, 4)
pG(3, 10, 2)