/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("prompt-sync")();
var maior = 0;
var array1 = new Array(10);
for (var x = 1; x <= 10; x++) {
    array1[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
    if (array1[x] > maior) {
        maior = array1[x];
    }
}
console.log("O maior n\u00FAmero \u00E9 ".concat(maior, "!"));
