// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')(); 
let tempCelsius;

do {
    tempCelsius = parseFloat(prompt("Digite um valor em graus Celsius: "));
} while (isNaN(tempCelsius));

let temFahrenheit = (tempCelsius * 1.8) + 32;
console.log(`A temperatura ${tempCelsius}ºG equivale a ${temFahrenheit.toFixed(2)}ºF`);


