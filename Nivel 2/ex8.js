const aluno = {
  nome: "Maria",
  idade: 17,
  turma: "2TDS"
};
const { nome, idade, turma } = aluno;
console.log("Com destructuring:", nome, "-", turma, "-", idade);