/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Tiago Daniel de Sousa Filho*/

console.clear();
const teclado = require(`prompt-sync`)();
let maior: number = 0;
let array1: number [] = new Array (10);

for(let x = 1; x <= 10; x++){
    array1[x] = parseInt(teclado(`Digite os números: `));
    if(array1[x] > maior){
        maior = array1[x];
    }
}
console.log(`O maior número é ${maior}!`);

