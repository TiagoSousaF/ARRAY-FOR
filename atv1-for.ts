/*1 – Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.
Tiago Daniel de Sousa Filho*/

console.clear();
let soma: number = 0;

for(let x: number = 0; x <= 50; x++){
   soma = soma + x;
}

console.log(`A soma de 0 a 50 é ${soma}!`);