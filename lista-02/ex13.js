// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//   atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//   da sequência de Fibonacci.

let firstTerm = 1;
let secondTerm = 1;
let nextTerm = 0;
let fibonacci = [];
let maxPositions = 15;

fibonacci.push(firstTerm);
fibonacci.push(secondTerm);

for (let i = 0; i < maxPositions - 2; i++) {
  nextTerm = firstTerm + secondTerm;
  fibonacci.push(nextTerm);
  firstTerm = secondTerm;
  secondTerm = nextTerm;
}

console.log(fibonacci);
