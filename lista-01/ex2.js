// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')(); 
let numEleitores;
let numVotosBrancos;
let numVotosNulos;
let numVotosValidos;

do {
    numEleitores = parseInt(prompt("Digite o número de eleitores: "));
} while (isNaN(numEleitores));

do {
    numVotosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
} while (isNaN(numVotosBrancos));

do {
    numVotosNulos = parseInt(prompt("Digite o número de votos nulos: "));
} while (isNaN(numVotosNulos));

do {
    numVotosValidos = parseInt(prompt("Digite o número de votos válidos: "));
} while (isNaN(numVotosValidos));

if (numEleitores < numVotosBrancos + numVotosNulos + numVotosValidos) {
    console.log("A soma dos votos é maior que o número de eleitores");
    process.exit(1);
}
else {
    let percentualVotosBrancos = (numVotosBrancos / numEleitores) * 100;
    let percentualVotosNulos = (numVotosNulos / numEleitores) * 100;
    let percentualVotosValidos = (numVotosValidos / numEleitores) * 100;
    
    console.log(`O percentual de votos brancos é de ${percentualVotosBrancos.toFixed(2)}%`);
    console.log(`O percentual de votos nulos é de ${percentualVotosNulos.toFixed(2)}%`);
    console.log(`O percentual de votos válidos é de ${percentualVotosValidos.toFixed(2)}%`);
    
    if (percentualVotosBrancos + percentualVotosNulos + percentualVotosValidos < 100) {
        console.log(`${(100 - (percentualVotosBrancos + percentualVotosNulos + percentualVotosValidos)).toFixed(2)}% das pessoas não votaram`);
    }
}


