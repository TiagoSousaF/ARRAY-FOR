/*2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Tiago Daniel de Sousa Filho*/

console.clear();
const teclado = require(`prompt-sync`)();
let array1: number [] = new Array (10);

for(let x: number = 0; x <= 9; x++){
    array1[x] = parseInt(teclado(`Digite o número a ser multiplicado por 4: `));
    let resultado: number = array1[x] * 4;
    console.log(`O resultado da operação é: ${resultado}`);
}
