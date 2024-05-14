/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Tiago Daniel de Sousa Filho*/
console.clear();
var array1 = ["Domingo", "Segunda-Feira", "Ter\u00E7a-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "S\u00E1bado"];
var array2 = ["Jogar", "Andar de Bike", "Ler", "Assistir", "Correr", "Nadar", "Caminhar"];
for (var x = 0; x < 7; x++) {
    console.log("No dia ".concat(array1[x], ", eu gosto de ").concat(array2[x]));
}
