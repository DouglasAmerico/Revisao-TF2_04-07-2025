const prompt = require("prompt-sync")();

let sala = []

for (let qtdAlunos = 0; qtdAlunos < 3; qtdAlunos++) {
    let aluno = {
        nome : undefined,
        idade : undefined,
        notas : []  
    }

    aluno.nome = prompt("Informe o nome: ");
    aluno.idade = prompt("Informe a idade de "+aluno.nome+": ");
    for (let index = 1; index <= 3; index++) {
        aluno.notas.push(prompt("Informe a nota "+index+" de "+aluno.nome+": "));
    }
    sala.push(aluno)  
}



console.log(sala[0].notas[0]);