function escolhaDeCarros (tipo) {
    switch (tipo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'motocicleta':
            return 'Você tem certeza que não prefere este modelo?'
        case 'caminhotes':
            return 'Você tem certeza que não prefere este modelo?'
        case 'sedans':
            return 'Você tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }   
}

console.log(escolhaDeCarros('motocicleta'))