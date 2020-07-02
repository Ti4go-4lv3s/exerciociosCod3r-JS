function cardapioLanchonete (codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `Produto: Cachorro quente
Quantidade: ${quantidade}
Valor total: ${quantidade * 3.00} `
        case 200:
            return `Produto: Hambúrguer Simples
Quantidade: ${quantidade}
Valor total: ${quantidade * 4.00}`
        case 300:
            return `Produto: Cheeseburguer
Quantidade: ${quantidade}
Valor total: ${quantidade * 5.50}`
        case 400:
            return `Produto: Bauru
Quantidade: ${quantidade}
Valor total: ${quantidade * 7.50}`
        case 500:
            return `Produto: Refrigerante
Quantidade: ${quantidade}
Valor total: ${quantidade * 3.50}`
        case 600:
            return `Produto: Suco
Quantidade: ${quantidade}
Valor total: ${quantidade * 2.80}`
        default:
            return 'Produto inexistente'

    }
} 

console.log(cardapioLanchonete(100, 5))