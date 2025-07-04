const prompt = require("prompt-sync")();
let alunos = [];
let idadeAluno = [];

for (let index = 0; index < 3; index++) {
    alunos.push(prompt("Informe o nome do aluno: "));
    idadeAluno.push(prompt("Informe a idade do(a) aluno(a) "+alunos[index]+": "));
}

console.log(alunos);
console.log(idadeAluno);