// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require("prompt-sync")();

let salary = 0;
let gender = "";

let totalSalaryMen = 0;
let totalQuantityMen = 0;
let totalSalaryWomen = 0;
let totalQuantityWomen = 0;

let cont = false;

do {
  gender = prompt("Informe o sexo do funcionário (M/F): ").toLowerCase();
  salary = parseFloat(prompt("Informe o salário do funcionário: "));

  if (gender === "f") {
    totalSalaryWomen += salary;
    totalQuantityWomen++;
  } else if (gender === "m") {
    totalSalaryMen += salary;
    totalQuantityMen++;
  } else {
    console.log("Digite um sexo válido");
    break;
  }

  cont = prompt("Deseja inserir novos funcionários? (s/n): ").toLowerCase();
  cont == "s" ? (cont = true) : (cont = false);
} while (cont);

console.log("O total de salário pago para homens foi de: " + totalSalaryMen);
console.log(
  "O total de salário pago para mulheres foi de: " + totalSalaryWomen
);
