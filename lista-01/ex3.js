// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require('prompt-sync')();

let num1;
let num2;
let num3;
let num4;

do {
    num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
} while (isNaN(num1));

do {
    num2 = parseInt(prompt("Digite o segundo número inteiro: "));
} while (isNaN(num2));

do {
    num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
} while (isNaN(num3));

num1 += 25;
num2 *= 3;
num3 *= 0.12;

num4 = num1 + num2 + num3;

console.log(`O primeiro número é ${num1}`);
console.log(`O segundo número é ${num2}`);
console.log(`O terceiro número é ${num3}`);
console.log(`O quarto número é ${num4}`);