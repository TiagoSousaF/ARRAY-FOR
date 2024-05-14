/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(10);
var tamanho = 10;
for (var x = 0; x <= 9; x++) {
    array1[x] = parseInt(teclado("Digite os n\u00FAmeros a serem comparados: "));
    for (var y = 0; y < tamanho - 1; y++) {
        for (var z = 0; z < tamanho - 1 - y; z++) {
            if (array1[z] > array1[z + 1]) {
                var ordem = array1[z];
                array1[z] = array1[z + 1];
                array1[z + 1] = ordem;
            }
        }
    }
}
console.log("A ordem crescente \u00E9 ".concat(array1));
