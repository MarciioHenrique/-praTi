// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite um número decimal: "));
let weight = parseFloat(prompt("Digite o peso do número: "));
let sum = 0;
let sumWeight = 0;

while(num !== 0) {
    sum += num * weight;
    sumWeight += weight;
    num = parseFloat(prompt("Digite um número decimal: "));
    weight = parseFloat(prompt("Digite o peso do número: "));
}


if (sum === 0) {
    console.log("Nenhum número foi digitado");
} else {
    const result = sum / sumWeight;
    console.log(`A média ponderada dos números digitados é ${result.toFixed(2)}`);
}