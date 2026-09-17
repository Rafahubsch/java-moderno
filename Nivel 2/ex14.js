const pessoa= {nome: "Mariana", idade: 25, profissao: "Desenvolvedora"};




apresentarPessoa = (pessoa) => {
    return ` ${pessoa.nome} tem  ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}


console.log(apresentarPessoa(pessoa));
