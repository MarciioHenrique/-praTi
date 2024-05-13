// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

const firstSide = parseInt(prompt("Digite o valor do 1º segmento de reta: "));
const secondSide = parseInt(prompt("Digite o valor do 2º segmento de reta: "));
const thirdSide = parseInt(prompt("Digite o valor do 3º segmento de reta: "));

if (
  firstSide > secondSide + thirdSide ||
  secondSide > firstSide + thirdSide ||
  thirdSide > firstSide + secondSide
) {
  console.log(firstSide, secondSide, thirdSide);
  console.log("Não é possível formar um triângulo com essas medidas");
} else {
  console.log("É possível formar um triângulo com essas medidas");
}
