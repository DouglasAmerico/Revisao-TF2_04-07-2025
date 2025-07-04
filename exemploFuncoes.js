const prompt = require("prompt-sync")();

function printaHelloWord(){
    console.log("Hello Word");
}

printaHelloWord();
console.log("-----");

function soma1(a,b){
    return a+b;
}

console.log(soma1(20,12));

let soma2 = (a,b) => {
    return a+b;
}

console.log(soma2(20,12));