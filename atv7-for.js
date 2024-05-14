/*7- Faça um programa para calcular n! (Fatorial de
    n), sendo que o valor inteiro de n é fornecido pelo
    usuário. utilize laço de repetição for.
    Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("prompt-sync")();
var y = 1;
var z = 1;
var maximo = parseInt(teclado("Digite o n\u00FAmero: ")) - 1;
for (var x = 0; x <= maximo; x++) {
    y = y * z;
    z++;
    console.log(y);
}
