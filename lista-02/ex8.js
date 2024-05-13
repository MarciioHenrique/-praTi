// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require("prompt-sync")();

const activityHours = prompt(
  "Digite a quantidade de horas de atividades que teve no mês: "
);
let points = 0;
let rewards = 0;

if (activityHours < 10) {
  points += activityHours * 2;
} else if (activityHours < 20) {
  points += activityHours * 5;
} else {
  points += activityHours * 10;
}

rewards = points * 0.05;

console.log(
  `Você teve ${activityHours}h de atividade e obteve ${points} pontos e R$ ${rewards.toFixed(
    2
  )}`
);
