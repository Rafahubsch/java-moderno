const produto = {
    nome: "Hidratante corporal",
    preco: 80
};


const mostrarProduto = ({ nome, preco }) => {
    return `Produto: ${nome} - Preço: R$ ${preco}`;
};


console.log(mostrarProduto(produto));


