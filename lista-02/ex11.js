// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//   Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//   valores da sequência.

const prompt = require("prompt-sync")();

let term = parseInt(prompt("Digite o primeiro termo da PA: "));
let ratio = parseInt(prompt("Digite a razão da PA: "));
let sum = 0;

for (let i = 0; i < 10; i++) {
  console.log(term);
  sum += term;
  term += ratio;
}

console.log("A soma de todos os valores da PA é: " + sum);
