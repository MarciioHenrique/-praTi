// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

const answer = Math.floor(Math.random() * 5 + 1);
let guess;

do {
  guess = parseInt(prompt("Digite o seu chute (1-5): "));
} while (guess !== answer);

console.log("Parabéns, você acertou!");
