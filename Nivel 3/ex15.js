const calculardesconto = (preco, desconto) => {
    const valorDesconto = preco - desconto;
    return valorDesconto;
}
console.log(calculardesconto(200, 20));
