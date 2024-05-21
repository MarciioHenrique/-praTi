// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let firstTerm = 1;
let secondTerm = 1;
let nextTerm = 0;

console.log(firstTerm);v    
console.log(secondTerm);

for (let i = 0; i < 8; i++) {
  nextTerm = firstTerm + secondTerm;
  console.log(nextTerm);
  firstTerm = secondTerm;
  secondTerm = nextTerm;
}
