// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")();

const distance = prompt("Digite a distância que deseja percorrer em KM: ");
let price;

if (distance <= 200) {
  price = distance * 0.5;
} else {
  price = distance * 0.45;
}

console.log(`O valor da viagem é de: R$ ${price.toFixed(2)}`);
