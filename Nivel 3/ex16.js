const produto = {
    nome: "Headset",
    preco: 200,
    desconto: 20
};


const { nome, preco, desconto } = produto;


const calcularPrecoFinal = (preco, desconto) => preco - desconto;


console.log(`${nome} custava ${preco} reais e agora custa ${calcularPrecoFinal(preco, desconto)} reais.`);



