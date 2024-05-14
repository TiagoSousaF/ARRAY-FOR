/*2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(10);
for (var x = 0; x <= 9; x++) {
    array1[x] = parseInt(teclado("Digite o n\u00FAmero a ser multiplicado por 4: "));
    var resultado = array1[x] * 4;
    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(resultado));
}
