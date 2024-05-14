/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(10);
var array2 = new Array(10);
var z = 0;
for (var x = 0; x <= 9; x++) {
    array1[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice: "));
}
for (var y = 9; y >= 0; y--) {
    array2[y] = array1[z];
    z++;
}
console.log(array1);
console.log(array2);
