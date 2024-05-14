/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Tiago Daniel de Sousa Filho*/

console.clear();
const teclado = require(`prompt-sync`)();
let array1: number [] = new Array (10);
let array2: number [] = new Array (10);
let z: number = 0;

for(let x: number = 0; x <= 9; x++){
    array1[x] = parseInt(teclado(`Digite o número do índice: `));
}

for(let y: number = 9; y >= 0; y--) {
    array2[y] = array1[z];
    z++;
}

console.log(array1);
console.log(array2);