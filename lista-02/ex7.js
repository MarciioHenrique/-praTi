// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();

let car;
do {
  car = prompt("Digite o modelo do carro (popular ou luxo): ").toLowerCase();
} while (car != "popular" && car != "luxo");

const days = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const distance = parseFloat(prompt("Digite a distância percorrida (em KM): "));
let value = 0;

if (car === "popular") {
  value += 90 * days;
  if (distance <= 100) {
    value += 0.2 * distance;
  } else {
    value += 0.1 * distance;
  }
} else if (car === "luxo") {
  value += 150 * days;
  if (distance <= 200) {
    value += 0.3 * distance;
  } else {
    value += 0.25 * distance;
  }
} else {
  console.log("Digite um modelo de carro válido");
}

console.log(
  `Você usou um carro de modelo ${car} por ${days} e percorreu ${distance} km, o valor a pagar é de R$ ${value.toFixed(
    2
  )}`
);
