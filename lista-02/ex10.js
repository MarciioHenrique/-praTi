// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require("prompt-sync")();

let value;
let sum = 0;
let lowerValue = null;
let quantityOfValues = 0;
let quantityOfEvenValues = 0;

let shouldContinue = true;
do {
  value = parseInt(prompt("Digite um valor: "));

  sum += value;
  quantityOfValues++;

  if (lowerValue == null || lowerValue > value) {
    lowerValue = value;
  }

  if (value % 2 == 0) {
    quantityOfEvenValues++;
  }

  shouldContinue = prompt("Deseja inserir um novo valor? (s/n): ");
} while (shouldContinue);

console.log("O somatório entre todos os valores é: " + sum);
console.log("O menor valor digitado foi: " + lowerValue);
console.log("A média entre todos os valores é: " + sum / quantityOfValues);
console.log("A quantidade de valores pares é: " + quantityOfEvenValues);
