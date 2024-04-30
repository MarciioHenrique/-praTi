// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um número decimal: "));
let sum = 0;
let count = 0;

while(num !== 0) {
    sum += num;
    count++;
    num = parseFloat(prompt("Digite um número decimal: "));
}

if (count === 0) {
    console.log("Nenhum número foi digitado");
} else {
    console.log(`A média aritmética dos ${count} números digitados é ${(sum / count).toFixed(2)}`);
}