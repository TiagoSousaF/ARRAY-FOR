/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Tiago Daniel de Sousa Filho*/

console.clear();
const teclado = require(`prompt-sync`)();
let array1: number [] = new Array (10);
let tamanho: number = 10;

for(let x: number = 0; x <= 9; x++){
    array1[x] = parseInt(teclado(`Digite os números a serem comparados: `));
    for (let y: number = 0; y < tamanho - 1; y++) {
        for (let z: number = 0; z < tamanho - 1 - y; z++) {
            if (array1[z] > array1[z + 1]) {
                let ordem: number = array1[z];
                array1[z] = array1[z + 1];
                array1[z + 1] = ordem;
            }
        }
    }
}

console.log(`A ordem crescente é ${array1}`);