function bhaskara (a, b, c) {
    let delta = Math.sqrt((b**2) - 4 * a * c)
    let x1 = 0
    let x2 = 0
    
    if (delta < 0) {
        return 'Delta não possui raizes reais.'
    } else {
      x1 = (-b + delta) / (2 * a)
      x2 = (-b - delta) / (2 * a)
    }
    return [x1, x2]
    
}
console.log(bhaskara(2, -16, -18))