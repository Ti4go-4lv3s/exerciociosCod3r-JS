function feiraDaFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
        case 'kiwi':
            return 'Estamos com escassez de Kiwis.'
        case 'melancia':
            return 'Toma aqui custa 3 conto o grama.'
        default:
            return 'Error 404, fruit not found'
    }
}