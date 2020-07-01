function triangulos (a, b, c) {
    if (((b - c) < a && a < b + c) && ((a - b) < c && c < a + b) && ((a - c) < b && b < a + b)) {
        if (a != b && a != c && b != c) {

            return 'Triangulo Escaleno'

        } else if (a === b && a === c && b === c) {

            return 'Triangulo Equilátero'

        } else {

            return 'Triangulo Isosceles'
        }        
    } else {
        
        return 'Não dá para formar um triangulo com essas medidas!'
    }
}

console.log(triangulos(12, 12, 12))