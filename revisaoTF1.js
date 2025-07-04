const prompt = require("prompt-sync")();

let nome = prompt("Informe o seu nome: ");
let idade;
do{
    idade = prompt("Informe sua idade: ");
    if(idade < 0 || idade > 120){
        console.log("A idade informada é invalida");
    }
}while (idade < 0 || idade > 120);

console.log("O nome informado na variavel foi "+nome);
if(idade >= 18){
    console.log("O "+nome+" é maior de idade");
}else{
    console.log("O "+nome+" é menor de idade");
}