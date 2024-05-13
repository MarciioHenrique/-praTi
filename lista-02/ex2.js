// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h,
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")();

const speed = prompt("Digite a velocidade do carro em KM/h: ");
let value = 0;

if (speed <= 80) {
  console.log("Você está dentro do limite de velocidade");
} else {
  value = (speed - 80) * 5;
  console.log(`Você foi multado em R$ ${value.toFixed(2)}`);
}
