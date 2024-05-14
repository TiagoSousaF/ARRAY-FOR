/*6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR
Tiago Daniel de Sousa Filho*/
console.clear();
for (var x = 1000; x <= 2000; x++) {
    if (x % 11 == 2) {
        console.log("O n\u00FAmero ".concat(x, ", quando dividido por 11, tem o n\u00FAmero 2 como resto"));
    }
}
