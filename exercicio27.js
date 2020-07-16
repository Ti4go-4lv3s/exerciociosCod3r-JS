function calcularAlturasInfantis (altCrianca1, altCrianca2, taxaAnualCrianca1, taxaAnualCrianca2) {
    let anos = 0
    if (altCrianca1 == altCrianca2 && taxaAnualCrianca1 == taxaAnualCrianca2) {
        return 'As crianças cresceram uniformemente'
    } else if (altCrianca1 > altCrianca2 && taxaAnualCrianca1 > taxaAnualCrianca2) {
        return 'A primeira criança sempre será maior'
    } else if (altCrianca2 > altCrianca1 && taxaAnualCrianca2 > taxaAnualCrianca1){
        return 'A segunda criança sempre será maior'
    }
    if (altCrianca1 > altCrianca2 && taxaAnualCrianca1 < taxaAnualCrianca2) {
        while (altCrianca2 < altCrianca1) {

            altCrianca2 += taxaAnualCrianca2
            altCrianca1 += taxaAnualCrianca1
            anos++
        }
        return `Serão ${anos} até que a segunda criança seja maior que a primeira criança`
    }
    if (altCrianca2 > altCrianca1 && taxaAnualCrianca2 < taxaAnualCrianca1) {
        while (altCrianca1 < altCrianca2) {
            altCrianca1 += taxaAnualCrianca1
            altCrianca2 += taxaAnualCrianca2
            anos++
        }
        return `Serão ${anos} até que a primeira criança seja maior que a segunda criança`
    } 
} 

console.log(calcularAlturasInfantis(0.63, 0.64, 0.03, 0.04))
