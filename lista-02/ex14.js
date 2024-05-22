// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require("prompt-sync")();

let names = [];
let quantityOfNames = 7;

for (let i = 0; i < quantityOfNames; i++) {
  names.push(prompt("Digite um nome: "));
}

console.log(names.reverse());
