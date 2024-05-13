// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

const player1 = prompt("Digite o símbolo do jogador 1: ").toLowerCase();
const player2 = prompt("Digite o símbolo do jogador 2: ").toLowerCase();

if (
  (player1 == "tesoura" && player2 == "papel") ||
  (player1 == "papel" && player2 == "pedra") ||
  (player1 == "pedra" && player2 == "tesoura")
) {
  console.log("Jogador 1 ganhou");
} else if (
  (player2 == "tesoura" && player1 == "papel") ||
  (player2 == "papel" && player1 == "pedra") ||
  (player2 == "pedra" && player1 == "tesoura")
) {
  console.log("Jogador 2 ganhou");
} else if (player1 == player2) {
  console.log("Empate");
} else {
  console.log("Símbolo desconhecido, tente novamente!");
}
