/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Tiago Daniel de Sousa Filho*/

console.clear();

let array1: string[] = [`Domingo`, `Segunda-Feira`, `Terça-Feira`, `Quarta-Feira`, 
`Quinta-Feira`, `Sexta-Feira`, `Sábado`];
let array2: string[] = [`Jogar`, `Andar de Bike`, `Ler`, `Assistir`, `Correr`, `Nadar`, `Caminhar`];

for(let x: number = 0; x < 7; x++){
    console.log(`No dia ${array1[x]}, eu gosto de ${array2[x]}`);
}