// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const numberOfCigarettesPerDay = prompt("Digite a quantidade de cigarros fumados por dia: ");
const yearsSmoking = prompt("Fuma a quantos anos? ");

if (numberOfCigarettesPerDay === 0) {
    console.log("Parabéns!! Você não perdeu dias de vida por fumar");
}
else {
    let numberTotalOfCigarettes = (yearsSmoking * 365) * numberOfCigarettesPerDay;
    let lifeLostInMinutes = numberTotalOfCigarettes * 10;
    let lifeLostInDays = lifeLostInMinutes / 1440;
    console.log(`Você perdeu ${lifeLostInDays.toFixed(2)} dias por conta do cigarro`);
}
