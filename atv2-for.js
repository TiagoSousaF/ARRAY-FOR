/*2- Exibir os números pares de 0 a 60, fazer uso do laço
de repetição for.
Tiago Daniel de Sousa Filho*/
console.clear();
for (var par = 0; par <= 60; par++) {
    if (par % 2 == 0) {
        console.log("O n\u00FAmero ".concat(par, " \u00E9 par!"));
    }
}
