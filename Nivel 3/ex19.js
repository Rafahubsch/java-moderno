const jogo = {
    titulo: "Minecraft",
    genero: "Sandbox",
    preco: 99
};


const exibirJogo = ({ titulo, genero, preco }) => {
    return `${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`;
};


console.log(exibirJogo(jogo));


