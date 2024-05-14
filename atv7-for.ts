/*7- Faça um programa para calcular n! (Fatorial de
    n), sendo que o valor inteiro de n é fornecido pelo
    usuário. utilize laço de repetição for.
    Tiago Daniel de Sousa Filho*/

console.clear();
const teclado = require(`prompt-sync`)();
let y: number = 1;
let z: number = 1;
let maximo: number = parseInt(teclado(`Digite o número: `)) - 1;

for(let x: number = 0; x <= maximo; x++){
    y = y * z;
    z++;
    console.log(y);
}